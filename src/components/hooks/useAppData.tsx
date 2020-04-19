import {useState, useCallback} from 'react'

export default function useAppData() {
  const [data, setData] = useState({})

  console.log(data)

  const setAppData = useCallback((appData) => {
    setData(appData)
  }, [])

  return {
    data,
    setAppData
  }
}