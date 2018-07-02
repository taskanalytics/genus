import React, { Component } from 'react'
import T from 'prop-types'
import { Box } from '../Grid'

import {
  StyledWrapper,
  StyledAction,
  StyledHeading,
  StyledSeparator,
  StyledDropdown,
  StyledItem,
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
  }

  closeMenu = () => {
    this.setState({ open: false }, () => {
      document.removeEventListener('click', this.onClickOutside)
    })
  }

  onClickOutside = (event) => {
    if (this.dd && !this.dd.contains(event.target)) {
      this.closeMenu()
    }
  }

  toggle = (event) => {
    event.preventDefault()
    const open = !this.state.open
    this.setState({ open }, () => {
      if (open) {
        document.addEventListener('click', this.onClickOutside)
      } else {
        document.removeEventListener('click', this.onClickOutside)
      }
    })
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.onClickOutside)
  }

  render () {
    const {
      right,
      actions,
      renderTrigger,
    } = this.props
    const { open } = this.state
    const dialogStyles = this.props.dialogStyles || {}

    return (
      <StyledWrapper>
        <Box>
          { renderTrigger({
            onClick: this.toggle,
          }) }
        </Box>
        <StyledDropdown
          open={open}
          right={right}
          innerRef={ref => this.dd = ref}
          mt={1}
          css={dialogStyles}
        >
          {actions.map((action, key) => {
            const props = { key: `action-${key}` }
            if (action.render) {
              action.type = 'component'
            }
            switch (action.type) {
              case 'separator':
                return <StyledSeparator {...props} />
              case 'heading':
                return <StyledHeading {...props}>{action.name}</StyledHeading>
              case 'component':
                return <StyledItem><action.render {...props} /></StyledItem>
              default:
                return <StyledItem
                  {...props}
                  destructive={action.type === 'destructive'}
                  onClick={e => {
                    e.stopPropagation()
                    action.action(e, {
                      close: this.closeMenu,
                    })
                  }}
                >{action.name}</StyledItem>
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
    renderTrigger: T.func,
    dialogStyles: T.object,
  }
}

export default Dropdown
