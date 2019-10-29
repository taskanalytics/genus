/** @jsx jsx */
import React, { useState, Component } from 'react'
import T from 'prop-types'
import { jsx } from '@emotion/core'
import { withTheme } from 'emotion-theming'

import Dropdown from '../Dropdown'

import { StyledCard, StyledMoreButton } from './styled'

const size = 24

function MoreIcon () {
  return (
    <svg width='24px' height='24px' viewBox='0 0 24 24'>
      <path d='M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z' />
    </svg>
  )
}

const actionsWrapperStyles = {
  position: 'absolute',
  top: 18,
  right: size,
  width: size,
  height: size,
  padding: 0,
}

function Actions ({ actions, onClose, open }) {
  return (
    <div css={actionsWrapperStyles}>
      <Dropdown
        open={open || undefined}
        onClose={onClose}
        right
        renderTrigger={props => (
          <StyledMoreButton type='button' title='Open actions' {...props}>
            <MoreIcon />
            <span>Open actions</span>
          </StyledMoreButton>
        )}
        actions={actions}
      />
    </div>
  )
}

function Card ({ actions, children, ...props }) {
  const [actionsOpen, setActionsOpen] = useState(false)

  const cardProps = {
    p: 3,
    ...props,
  }
  if (actions) {
    cardProps.onContextMenu = e => {
      e.preventDefault()
      setActionsOpen(true)
    }
  }
  function actionsClosed () {
    setActionsOpen(false)
  }

  return (
    <StyledCard {...cardProps} data-genus='Card'>
      {actions && (
        <Actions actions={actions} open={actionsOpen} onClose={actionsClosed} />
      )}
      {children}
    </StyledCard>
  )
}

Actions.propTypes = {
  actions: T.oneOfType([T.array, T.func]),
  p: T.oneOfType([T.number, T.string]),
}

Card.propTypes = {
  actions: T.oneOfType([T.array, T.func]),
  children: T.node,
}

Card.defaultProps = {
  bg: 'white',
  width: null,
}

export default Card
