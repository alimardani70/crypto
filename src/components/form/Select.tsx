import React, { useState } from 'react'

import SelectTW from 'react-tailwindcss-select'

type optionType = {
  value: any
  label: string
}
type optionsType = {
  label: string
  options: optionType[]
  isMultiple?: boolean
  className?: string
  onChange?: (value: any) => void
}

const Select: React.FC<optionsType> = ({
  label,
  options,
  isMultiple = false,
  className = '',
  onChange,
}) => {
  const [selected, setSelected] = useState<any>(null)
  const handleChange = (value: any): void => {
    console.log('value:', value)
    setSelected(value)
    if (onChange) onChange(value)
  }
  return (
    <div className={className}>
      <SelectTW
        value={selected}
        onChange={handleChange}
        options={options}
        primaryColor={'indigo'}
        isMultiple={isMultiple}
      />
    </div>
  )
}

export default Select
