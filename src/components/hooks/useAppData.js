import React, { useState, useCallback } from 'react'

export default function useAppData () {
  const [data, setData] = useState({})

  const setAppData = useCallback((appData) => {
    setData(appData)
  })

  return {
    data,
    setAppData
  }
}