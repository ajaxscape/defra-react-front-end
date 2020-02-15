import React, { useState, useCallback } from 'react'

export default function useFormData () {
  const [data, setData] = useState({})

  const setFormData = useCallback((formData) => {
    setData(formData)
  })

  return {
    data,
    setFormData
  }
}