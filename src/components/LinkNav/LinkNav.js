import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export const LinkNav = (props) => {
  function handleClick (e) {
    if (!props.to) { return e.preventDefault() }
  }

  const [isHover, setHovered] = React.useState(false)
  const linkStyle =
        {
          color: 'black',
          transition: '600ms',
          textDecoration: isHover ? 'underline' : 'inherit'
        }

  return (
    <NavLink
      onClick={handleClick}
      to={props.to}
      style={linkStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {props.children}
    </NavLink>

  )
}

LinkNav.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  styled: PropTypes.string,
  text: PropTypes.string
}

export default LinkNav
