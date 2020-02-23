import React, { useState, useCallback } from 'react'

export default function useAppData (initialData = {}) {
  const [data, setData] = useState(initialData)

  console.log('AppData: ', data)

  const setAppData = useCallback((appData) => {
    setData(appData)
  })

  return {
    data,
    setAppData
  }
}