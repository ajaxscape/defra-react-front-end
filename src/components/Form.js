import React, { Children, cloneElement } from 'react'
import Button from './fields/Button'
import FormContext from './FormContext'
import useFormData from './hooks/useFormData'
import useValidator from './hooks/useValidator'
import ErrorSummary from './ErrorSummary'


function FormWrapper (props) {
  const { children, errors, validate } = props
  const elements = Children.toArray(children).map((child) => {
    const { id, name } = child.props
    return cloneElement(child, { validate, error: errors[id || name] })
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

  const { errors, validate } = useValidator(schema, errorMessages)

  async function onSubmitForm (e) {
    e.preventDefault()
    let valid = true
    if (handleSubmit) {
      valid = validate(data)
      if (valid) {
        await handleSubmit(data)
      }
    }
    if (valid) {
      history.push(nextLink)
    }
  }

  function onValidate () {
    return validate(data)
  }

  return (
    <FormContext.Provider value={formData}>
      <ErrorSummary errors={errors}/>
      <form action={action} onSubmit={onSubmitForm} method="post" noValidate>
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <FormWrapper {...props} errors={errors} validate={onValidate}/>
          </fieldset>
        </div>

        <Button>Continue</Button>
      </form>
    </FormContext.Provider>
  )
}
