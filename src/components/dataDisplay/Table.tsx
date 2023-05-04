import React, { ReactNode } from 'react'
import TableRow from './TableRow'
export type columnType = {
  label: string | ReactNode
  id: string
}
type propsType = {
  data: object[]
  columns: columnType[]
  className?: string
}

const Table: React.FC<propsType> = ({ data, columns, className }) => {
  const headerIds: string[] = []
  const headerLabels = columns.map((col: columnType) => {
    headerIds.push(col.id)
    return col.label
  })
  const rowOut = data.map((rowIn: object) => {
    return headerIds.map((id: string) => {
      if (id === 'image' && rowIn.hasOwnProperty('image'))
        return (
          <img
            src={rowIn[id as keyof object]}
            alt=""
            style={{ width: '30px' }}
          />
        )
      if (rowIn.hasOwnProperty(id)) return rowIn[id as keyof object]
      else return ''
    })
  })
  console.log(rowOut)
  return (
    <div className={className}>
      <table className="min-w-full divide-y divide-gray-200  items-center">
        <thead className="bg-gray-50">
          <TableRow columnType="th" data={headerLabels} />
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rowOut.map((itemRow, index) => (
            <TableRow key={index} columnType="th" data={itemRow} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
