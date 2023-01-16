import React from 'react'

export const renderItem = (item) => {
  return (
    <>
      <tr
        key={item.id}
        style={{ background: item.color }}
      >
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.year}</td>
      </tr>

    </>
  )
}
