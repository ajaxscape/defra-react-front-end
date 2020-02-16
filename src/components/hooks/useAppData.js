import React, { useState, useCallback } from 'react'

export default function useAppData () {
  const [data, setData] = useState(null)
  console.log('reset:', data)

  const setAppData = useCallback((appData) => {
    console.log(appData)
    setData(appData)
  })

  return {
    data,
    setAppData,
  }
}