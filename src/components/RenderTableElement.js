/* eslint-disable no-unused-vars */
import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

export const RenderTableElement = (props) => {
  const { item } = props
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: item.color,
    border: '2px solid #000',
    boxShadow: 24,
    p: 3
  }

  return (
    <>
      <tr
        key={item.id}
        style={{ background: item.color }}
        onClick={handleOpen}
      >
        <td className={'content__table--td'}>{item.id}</td>
        <td className={'content__table--td'}>{item.name}</td>
        <td className={'content__table--td'}>{item.year}</td>
      </tr>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={'modal-modal-title'}
        aria-describedby={'modal-modal-description'}
      >
        <Box sx={modalStyle}>
          <Typography
            id={'modal-modal-title'}
            variant={'h5'}
            component={'h2'}
            align={'center'}
          >
            {item.name}
          </Typography>
          <Typography
            id={'modal-modal-description'}
            sx={{ mt: 1 }}
            align={'center'}

          >
            ID: {item.id}, Year: {item.year}, Color: {item.color}, Pantone value: {item.pantone_value}
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

RenderTableElement.propTypes = {
  children: PropTypes.node,
  item: PropTypes.any
}
