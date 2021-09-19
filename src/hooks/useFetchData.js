/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import * as Status from '../constants/status'

function useFetchData(url) {
  const [response, setResponse] = useState({
    status: Status.PENDING,
    payload: {},
    message: '',
  })
  const GetData = async () => {
    try {
      const response = (await (await fetch(url)).json()) || {}
      if (response) {
        const data = { status: Status.SUCCESS, payload: response }
        setResponse(data)
      }
    } catch (err) {
      const data = {
        status: Status.ERROR,
        payload: {},
        message: 'Ocurrio un error',
      }
      setResponse(data)
    }
  }
  useEffect(() => {
    GetData()
  }, [])

  return response
}

export default useFetchData
