import React from 'react'
import PropTypes from 'prop-types'

const Table = (props) => {
  return (
    <table className={props.cn}>
      {props.children}
    </table>
  )
}

Table.propTypes = {
  children: PropTypes.node,
  cn: PropTypes.string
}

export default Table
