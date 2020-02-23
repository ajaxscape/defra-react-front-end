import { useState, useEffect } from 'react'
import camelcase from 'camelcase'

const camelCaseKeys = (data) => {
  const convertedData = {}
  Object.entries(data).forEach(([prop, value]) => {
    convertedData[camelcase(prop)] = typeof value === 'object' ? camelCaseKeys(value) : value
  })
  return convertedData
}

const useForm = (handleValidated, validate) => {

  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      handleValidated(camelCaseKeys(values))
    }
  }, [errors])

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault()
    }
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  const handleChange = (event) => {
    event.persist()
    setValues((values) => ({ ...values, [event.target.name]: event.target.value }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export default useForm