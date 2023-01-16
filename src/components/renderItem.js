import React from 'react'

export const renderItem = (item) => {
  return (
    <tr
      key={item.id}
      style={{ background: item.color }}
    >
      <td className={'content__table--td'}>{item.id}</td>
      <td className={'content__table--td'}>{item.name}</td>
      <td className={'content__table--td'}>{item.year}</td>
    </tr>
  )
}
