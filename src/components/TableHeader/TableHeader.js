import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = (props) => {
  const { cn, elementsCn, elements } = props

  return (

    <thead className={cn}>
      <tr>
        {elements.map((element, index) => {
          return (
            <th
              key={`table-header-${index}`}
              className={elementsCn}
            >{element}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  children: PropTypes.node,
  cn: PropTypes.string,
  elementsCn: PropTypes.string,
  elements: PropTypes.array
}

export default TableHeader
