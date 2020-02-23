import { useState, useEffect } from 'react'
import { camelCase, paramCase } from 'change-case'

const convertKeys = (data, converter) => {
  const convertedData = {}
  Object.entries(data).forEach(([prop, value]) => {
    convertedData[converter(prop)] = typeof value === 'object' ? convertKeys(value, converter) : value
  })
  return convertedData
}

const useForm = (handleValidated, validate, initialValues = {}) => {

  console.log('InitialFormData: ', initialValues)
  const [values, setValues] = useState() //convertKeys(initialValues, paramCase))
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      handleValidated(convertKeys(values, camelCase))
    }
  }, [errors, values])

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault()
    }
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  const handleChange = (event) => {
    event.persist()
    const {name, value} = event.target
    setValues((values) => ({ ...values, [name]: value }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export default useForm