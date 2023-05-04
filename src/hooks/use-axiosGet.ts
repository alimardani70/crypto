import { useCallback, useState } from 'react'
import axios from 'axios'

const useAxiosGet = () => {
  // const [data, setData] = useState(null)
  const [error, setError] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const sendRequest = useCallback(
    async (url: string, applyData: (data: any) => void, payload?: object) => {
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
      let params: object =
        payload === undefined
          ? { headers: headers }
          : { params: payload, headers: headers }
      axios
        .get(url, params)
        .then(response => {
          // console.log(response)
          return applyData(response.data)
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(true))
    },
    []
  )

  return {
    isLoading,
    error,
    sendRequest,
  }
}
export default useAxiosGet
