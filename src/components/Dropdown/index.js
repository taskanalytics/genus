import React, { Component } from 'react'
import T from 'prop-types'

import {
  overlayStyles,
  dropdownStyles,
  StyledWrapper,
  StyledAction,
  StyledHeading,
  StyledSeparator,
} from './styled'

const Actions = ({ actions }) => {
  return (
    actions.map((action, key) =>
      {switch(action.type) {
        case 'separator':
          return <StyledSeparator key={action.key} />
        case 'heading':
          return <StyledHeading key={action.key}>{action.name}</StyledHeading>
        default:
          return <StyledAction key={action.key} destructive={action.type}>{action.name}</StyledAction>
      }}
    )
  )
}

const overlayClassName = 'overlay'

class Dropdown extends Component {
  static defaultProps = {
    title: 'Please select…',
  }

  render () {
    const {
      title,
      close,
      toggle,
      actions,
    } = this.props

    return (
      <StyledWrapper
        isOpen={toggle}
        onRequestClose={close}
        contentLabel={title}
        ariaHideApp={false}
        className='dropdown'
        overlayClassName={`${overlayStyles} ${overlayClassName}`}
        role='dialog'>
        <Actions actions={actions} />
      </StyledWrapper>
    )

  }
}

if (process.env.NODE_ENV !== 'production') {
  Dropdown.propTypes = {
    title: T.string,
    close: T.func,
    toggle: T.bool.isRequired,
    actions: T.array.isRequired,
  }
}

export default Dropdown
