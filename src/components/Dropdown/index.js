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
    renderTrigger: (props) => <button type="button" {...props}>Toggle</button>
  }

  constructor (props) {
    super(props)
    this.state = {
      open: 'open' in props ? props.open : false,
    }
    if (this.state.open) {
      document.addEventListener('click', this.closeMenu)
    }
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
    this.setState({ open }, () => {
      if (open) {
        document.addEventListener('click', this.closeMenu)
      } else {
        document.removeEventListener('click', this.closeMenu)
      }
    })
  }

  render () {
    const {
      actions,
      renderTrigger,
    } = this.props
    const { open } = this.state

    return (
      <StyledWrapper>
        { renderTrigger({ onClick: this.toggle }) }
        <StyledDropdown open={open} innerRef={ref => this.dd = ref}>
          {actions.map((action, key) => {
            const props = { key: `action-${key}` }
            switch(action.type) {
              case 'separator':
                return <StyledSeparator {...props} />
              case 'heading':
                return <StyledHeading {...props}>{action.name}</StyledHeading>
              default:
                return <StyledAction {...props} destructive={action.type === 'destructive'}>{action.name}</StyledAction>
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
