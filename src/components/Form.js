import React, { Children, cloneElement, useState } from 'react'
import Button from './fields/Button'
import FormContext from './FormContext'
import useForm from './hooks/useForm'
import useFormData from './hooks/useFormData'
import { Validator } from 'jsonschema'



function FormWrapper (props) {
  const { children, handleChange, formData, errors, route } = props
  console.log('FormWrapper props: ', props)
  const { values } = formData
  console.log('FOOOORM Values: ', values)
  console.log('CHILDREN: ', children)
  const elements = Children.toArray(children).map((element) => {
    const { id, name = id, value } = element.props
    return cloneElement(element, {
      name,
      handleChange,
      value: value,
      error: errors[name],
      route,
    })
  })
  console.log('Elements: ', elements)
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
      console.log('Validating: ', values)
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

  console.log('MyForm: ', values)

  const formData = useFormData()

  formData.setFormData(values)

  return (
    <FormContext.Provider value={formData}>
      <form action={action} onSubmit={handleSubmit} method="post" noValidate>
        <fieldset className="govuk-fieldset">
          <FormWrapper handleChange={handleChange} cheese="CHEESE" formData={formData} errors={errors} {...props} />
        </fieldset>
        <Button>Continue</Button>
      </form>
    </FormContext.Provider>
  )
}
