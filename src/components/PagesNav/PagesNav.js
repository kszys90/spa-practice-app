/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Pagination } from '@mui/material'

const PagesNav = (props) => {
  const handleChange = (event, value) => {
    props.change(value)
    props.changeURL(value)
  }

  return (
    <div className={'content__nav--container'}>
      <Pagination
        color={'primary'}
        count={props.pages}
        page={props.value}
        onChange={handleChange}

      />
    </div>
  )
}

PagesNav.propTypes = {
  children: PropTypes.node,
  data: PropTypes.array,
  value: PropTypes.number,
  change: PropTypes.func,
  pages: PropTypes.number,
  changeURL: PropTypes.func
}

export default PagesNav
