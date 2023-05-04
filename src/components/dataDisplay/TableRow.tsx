import React from 'react'

type propsType = {
  columnType?: 'td' | 'th'
  data: any
}

const TableRow: React.FC<propsType> = ({ columnType = 'td', data }) => {
  const row = data.map((item: string, index: number) => {
    if (columnType === 'td')
      return (
        <td
          className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
          key={index}
        >
          {item}
        </td>
      )
    else
      return (
        <th
          key={index}
          scope="col"
          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
        >
          {item}
        </th>
      )
  })
  return <tr>{row}</tr>
}

export default TableRow
