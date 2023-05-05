import React, { useEffect, useState } from 'react'
import Category from 'view/section/crypto/Category'
import useAxiosGet from 'hooks/use-axiosGet'
import Table from 'components/dataDisplay/Table'
import Pagination from '../../components/dataDisplay/Pagination'
import { useQueryClient } from 'react-query'

type propsType = {}

const Crypto: React.FC<propsType> = () => {
  // Access the client
  const queryClient = useQueryClient()

  const { isLoading, error, sendRequest: getCrypto } = useAxiosGet()

  const [crypto, setCrypto] = useState<any>([])
  const [page, setPage] = useState<number>(1)
  const columns = [
    { label: 'COINS', id: 'symbol' },
    { label: '', id: 'image' },
    { label: '', id: 'name' },
    { label: 'PRICE', id: 'current_price' },
    { label: '24H', id: 'price_change_percentage_24h_in_currency' },
    { label: '7D', id: 'price_change_percentage_7d_in_currency' },
    { label: 'MARKET CAP ', id: 'market_cap' },
    { label: 'TOTAL VALUE', id: 'total_volume' },
    { label: 'CIRCULATING SUPPLY', id: 'circulating_supply' },
  ]
  const handlePageChange = (pageNumber: number) => {
    getCryptoRequest({
      vs_currency: 'usd',
      per_page: 20,
      price_change_percentage: '24h,7d',
      page: pageNumber,
    })
  }
  const changeCategory = (selected: any) => {
    // console.log(selected)
  }

  const applyCrypto = (data: any, page: number) => {
    // let allCrypto: any = []

    setCrypto(data)
    setPage(page)
  }
  const getCryptoRequest = (params: {
    vs_currency: string
    per_page: number
    price_change_percentage: string
    page: number
  }) => {
    getCrypto(
      'https://api.coingecko.com/api/v3/coins/markets',
      data => applyCrypto(data, page),
      params
    )
  }
  useEffect(() => {
    getCryptoRequest({
      vs_currency: 'usd',
      per_page: 20,
      price_change_percentage: '24h,7d',
      page: 1,
    })
  }, [getCrypto])
  useEffect(() => {
    console.log(crypto)
  }, [crypto])

  console.log(isLoading && !error)
  console.log(crypto)
  return (
    <>
      {!isLoading && <div>Loading...</div>}
      {error && <div>An error has occurred: {error}</div>}
      {isLoading && !error && (
        <div className="container mx-auto py-10">
          <Category onChange={changeCategory} />
          <Table data={crypto} columns={columns} className="mt-5" />
          <Pagination pageChange={handlePageChange} currentPage={page} />
        </div>
      )}
    </>
  )
}

export default Crypto
