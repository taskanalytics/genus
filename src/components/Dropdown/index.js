import React, { Component } from 'react'
import T from 'prop-types'

import {
  StyledWrapper,
  StyledAction,
  StyledHeading,
  StyledSeparator,
  StyledDropdown,
} from './styled'

class Dropdown extends Component {
  static defaultProps = {
    right: false,
    renderTrigger: (props) => (
      <button type="button" {...props}>Toggle</button>
    ),
  }

  state = {
    open: false,
    height: 0,
  }

  closeMenu = (event) => {
    if (this.dd && !this.dd.contains(event.target)) {
      this.setState({ open: false }, () => {
        document.removeEventListener('click', this.closeMenu)
      })
    }
  }

  toggle = (event) => {
    event.preventDefault()
    const open = !this.state.open
    let height = this.state.height
    if (open && !height) {
      height = this.wrapper.offsetHeight
    }
    this.setState({ open, height }, () => {
      if (open) {
        document.addEventListener('click', this.closeMenu)
      } else {
        document.removeEventListener('click', this.closeMenu)
      }
    })
  }

  render () {
    const {
      right,
      actions,
      renderTrigger,
    } = this.props
    const { open, height } = this.state

    return (
      <StyledWrapper innerRef={ref => this.wrapper = ref}>
        { renderTrigger({ onClick: this.toggle }) }
        <StyledDropdown
          open={open}
          right={right}
          innerRef={ref => this.dd = ref}
          css={{ top: height }}
        >
          {actions.map((action, key) => {
            const props = { key: `action-${key}` }
            switch (action.type) {
              case 'separator':
                return <StyledSeparator {...props} />
              case 'heading':
                return <StyledHeading {...props}>{action.name}</StyledHeading>
              default:
                return <StyledAction
                  {...props}
                  destructive={action.type === 'destructive'}
                  onClick={e => {
                    e.stopPropagation()
                    action.action(e)
                  }}
                >{action.name}</StyledAction>
            }
          })}
        </StyledDropdown>
      </StyledWrapper>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  Dropdown.propTypes = {
    open: T.bool,
    actions: T.array,
  }
}

export default Dropdown
