import {useState, useCallback} from 'react'
import isEqual from 'lodash.isequal'

export default function useFormData() {
  const [data, setData] = useState({})

  const setFormData = useCallback((formData) => {
    if (!isEqual(data, formData)) {
      setData(formData)
    }
  }, [data])

  return {
    data,
    setFormData
  }
}