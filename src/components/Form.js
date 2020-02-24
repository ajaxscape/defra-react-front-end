import React, { Children, cloneElement, useState } from 'react'
import Button from './fields/Button'
import FormContext from './FormContext'
import useFormData from './hooks/useFormData'
import { Validator } from 'jsonschema'
import ErrorSummary from './ErrorSummary'

function FormWrapper (props) {
  const { children, errors } = props
  const elements = Children.toArray(children).map((child) => {
    const { id, name } = child.props
    return cloneElement(child, { error: errors[id || name] })
  })
  return (
    <div className='form-wrapper'>
      {elements}
    </div>
  )
}

export default function Form (props) {
  const { action = null, schema = null, errorMessages = null, handleSubmit, nextLink, history } = props

  const formData = useFormData()
  const { data } = formData

  const [ errors, setErrors ] = useState({})

  const validate = (values) => {
    const errors = {}
    if (schema) {
      const validator = new Validator()
      validator.addSchema(schema, schema.id)
      const result = validator.validate(values, schema).errors
      console.log(result)
      result.forEach(({ property, message, name, argument }) => {
        let id
        if (property.includes('.')) {
          id = property.split('.')[argument]
        } else {
          id = argument
        }
        if (errorMessages && errorMessages[id] && errorMessages[id][name]) {
          errors[id] = errorMessages[id][name]
        } else {
          errors[id] = message
        }
      })
    }
    console.log(errors)
    return errors
  }

  async function onSubmitForm (e) {
    e.preventDefault()
    let errors = {}
    if (handleSubmit) {
      errors = validate(data)
      await handleSubmit(data, errors)
    }
    if (!Object.keys(errors).length) {
      history.push(nextLink)
    } else {
      setErrors(errors)
    }
  }

  return (
    <FormContext.Provider value={formData}>
      <ErrorSummary errors={errors}/>
      <form action={action} onSubmit={onSubmitForm} method="post" noValidate>
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <FormWrapper {...props} errors={errors}/>
          </fieldset>
        </div>

        <Button>Continue</Button>
      </form>
    </FormContext.Provider>
  )
}
