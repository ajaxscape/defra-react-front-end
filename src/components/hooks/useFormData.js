import React, { useState, useCallback } from 'react'

export default function useFormData (initialData = {}) {
  const [data, setData] = useState(initialData)

  console.log('FormData: ', data)

  const setFormData = useCallback((formData) => {
    if (formData !== data) {
      setData(formData)
    }
  })

  return {
    data,
    setFormData
  }
}