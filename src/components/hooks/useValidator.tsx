import {useState, useCallback} from 'react'
import {Schema, Validator} from 'jsonschema'

export default function useValidator(schema: Schema, errorMessages: any) {
  const [errors, setErrors] = useState(null)

  const validate = useCallback((values) => {
    const errors: any = {}
    if (schema) {
      const validator = new Validator()
      validator.addSchema(schema, schema.id)
      const result = validator.validate(values, schema).errors
      result.forEach(({property, message, name, argument}) => {
        let id
        if (property.includes('.')) {
          id = property.split('.')[argument]
        } else {
          id = argument
        }
        if (errorMessages[id] && errorMessages[id][name]) {
          errors[id] = errorMessages[id][name]
        } else {
          errors[id] = message
        }
      })
    }
    setErrors(errors)
    return (!Object.keys(errors).length)
  }, [errorMessages, schema])

  return {
    errors,
    validate
  }
}