import React, { Children, cloneElement } from 'react'
import Button from './fields/Button'
import useForm from './hooks/useForm'
import { Validator } from 'jsonschema'

function FormWrapper (props) {
  const { children, handleChange, values, errors, route } = props
  const elements = Children.toArray(children).map((element) => {
    const { name, value, error } = element.props
    return cloneElement(element, {
      handleChange,
      value: values[name] === undefined ? value : values[name],
      error: errors[name] === undefined ? error : errors[name],
      route,
    })
  })
  return (
    <div className='form-wrapper'>
      {elements}
    </div>
  )
}

export default function Form (props) {
  const { action = null, schema = null, handleValidated, history, nextLink } = props

  const validate = (values) => {
    const errors = {}
    if (schema) {
      const validator = new Validator()
      validator.addSchema(schema, schema.id)
      const result = validator.validate(values, schema).errors
      result.forEach(({ property, message, name, argument }) => {
        if (name === 'required') {
          errors[argument] = message
        } else
          errors[property.substr(property.indexOf('.') + 1)] = message
      })
    }
    return errors
  }

  const formCallback = (...args) => {
    handleValidated(...args)
    history.push(nextLink)
  }

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(formCallback, validate)

  return (
    <form action={action} onSubmit={handleSubmit} method="post" noValidate>
        <fieldset className="govuk-fieldset">
          <FormWrapper handleChange={handleChange} values={values} errors={errors} {...props} />
        </fieldset>

      <Button>Continue</Button>
    </form>
  )
}
