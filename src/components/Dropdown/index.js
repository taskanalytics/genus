import React, { Component } from 'react'
import T from 'prop-types'
import Popover from 'react-simple-popover'

import {
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
      show,
      actions,
      target,
      container,
    } = this.props

    return (
      <div ref={ref => this.container = ref}>
        <StyledWrapper
          show={show}
          onHide={close}
          hideWithOutsideClick={true}
          container={container || this.container}
          target={target || this.container}
          role='dialog'>
          <Actions actions={actions} />
        </StyledWrapper>
      </div>
    )

  }
}

if (process.env.NODE_ENV !== 'production') {
  Dropdown.propTypes = {
    title: T.string,
    close: T.func,
    show: T.bool.isRequired,
    actions: T.array.isRequired,
    target: T.node,
    container: T.node,
  }
}

export default Dropdown
