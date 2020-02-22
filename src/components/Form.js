import React, { Children, cloneElement } from 'react'
import Button from './fields/Button'
import useForm from './hooks/useForm'
import { Validator } from 'jsonschema'

function FormWrapper (props) {
  const { children, handleChange, values, errors, route, } = props
  const elements = Children.toArray(children).
    map((element) => {
      const { id, value, error } = element.props
      return cloneElement(element, { handleChange, value: values[id] || value, error: errors[id] || error, route } )
    })
  return (
    <div className='form-wrapper'>
      {elements}
    </div>
  )
}

export default function Form (props) {
  const { action = null, schema = null, handleValidated = null, children = null, nextLink, history } = props

  const validate = (values) => {
    const errors = {}
    const validator = new Validator()
    validator.addSchema(schema, schema.id)
    validator.validate(values, schema).
      errors.
      forEach(({ property, message }) => {
        property.substr(property.indexOf('.'))
        errors[property.substr(property.indexOf('.') + 1)] = message
      })
    return errors
  }

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(handleValidated, validate)

  return (
    <form action={action} onSubmit={handleSubmit} method="post" noValidate>
      <div className="govuk-form-group">
        <fieldset className="govuk-fieldset">
          <FormWrapper handleChange={handleChange} values={values} errors={errors} {...props} />
        </fieldset>
      </div>

      <Button>Continue</Button>
    </form>
  )
}
