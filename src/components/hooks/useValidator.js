import React, { useState, useCallback } from 'react'
import { Validator } from 'jsonschema'

export default function useValidator (schema = null, errorMessages = null) {
  const [ errors, setErrors ] = useState({})

  const validate = useCallback((values) => {
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
    setErrors(errors)
    return (!Object.keys(errors).length)
  })

  return {
    errors,
    validate
  }
}