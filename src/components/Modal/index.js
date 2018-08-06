import React from 'react'
import T from 'prop-types'
import {Box} from '../Grid'

import {
  overlayStyles,
  StyledModal,
  StyledCloseButton,
  StyledHeader,
  StyledTitle,
  StyledBody,
  StyledActions,
} from './styled'

const modalClassName = 'modal'
const overlayClassName = 'overlay'

const Modal = ({ isOpen, close, title, children }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={close}
      contentLabel={title}
      className={modalClassName}
      overlayClassName={`${overlayStyles} ${overlayClassName}`}
      role='dialog'
      aria={{
        labelledby: 'heading',
        describedby: 'full_description',
      }}>
      <StyledHeader p={3}>
        {title &&
          <Box>
            <StyledTitle id='heading'>{title}</StyledTitle>
          </Box>
        }
        <StyledCloseButton ml='auto' onClick={close}>
          x
        </StyledCloseButton>
      </StyledHeader>
      <StyledBody px={3} id='full_description'>
        {children}
      </StyledBody>
      <StyledActions p={3}>
        ACTIONS
      </StyledActions>
    </StyledModal>
  )
}

if (process.env.NODE_ENV !== 'production') {
  Modal.propTypes = {
    title: T.string,
    close: T.func.isRequired,
    isOpen: T.bool,
    children: T.any,
    actions: T.object,
    active: T.bool.isRequired,
  }
}

export default Modal
