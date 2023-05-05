import React, { useEffect, useState } from 'react'
import Select from 'components/form/Select'
import useAxiosGet from 'hooks/use-axiosGet'

type categoryRequestType = {
  category_id: string
  name: string
}
type categoryType = {
  value: string
  label: string
}

type propsType = {
  onChange: (data: any) => void
}

const Category: React.FC<propsType> = ({ onChange }) => {
  const { isLoading, error, sendRequest: getCategories } = useAxiosGet()
  const [categories, setCategories] = useState<categoryType[] | []>([])

  useEffect(() => {
    const applyCategories = (data: any) => {
      let allCategories: any = []
      data.map((item: categoryRequestType) => {
        allCategories.push({
          value: item.category_id,
          label: item.name,
        })
      })
      console.log(allCategories)
      setCategories(allCategories)
    }
    getCategories(
      'https://api.coingecko.com/api/v3/coins/categories/list',
      applyCategories
    )
  }, [getCategories])

  const changeHandler = (value: any) => {
    onChange(value)
  }
  return (
    <div>
      <Select
        className="w-1/3"
        isMultiple={true}
        label={'test'}
        options={categories}
        onChange={changeHandler}
      />
    </div>
  )
}

export default Category
