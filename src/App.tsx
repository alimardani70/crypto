import React from 'react'
import Crypto from './view/pages/Crypto'

const App = () => {
  /*
  const { isLoading, error, sendRequest: getCrypto } = useAxiosGet()
  useEffect(() => {
    const applyCrypto = (data: any) => {
      console.log(data)
    }
    getCrypto(
      'https://api.coingecko.com/api/v3/simple/supported_vs_currencies',
      applyCrypto
    )
  }, [getCrypto])
  */
  return <Crypto />
}

export default App
