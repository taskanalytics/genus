/** @jsx jsx */
import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import T from 'prop-types'
import { jsx } from '@emotion/core'

import {
  StyledMobileClose,
  StyledHeading,
  StyledSeparator,
  StyledDropdown,
  StyledItem,
  StyledWrapper,
} from './styled'

class Dropdown extends Component {
  static defaultProps = {
    right: false,
    renderTrigger: props => (
      <button type='button' {...props}>
        Toggle
      </button>
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

  onClickOutside = event => {
    if (this.dd && !this.dd.contains(event.target)) {
      this.closeMenu()
    }
  }

  toggle = event => {
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

  renderActions = actions => {
    const passedProps = { close: this.closeMenu }
    if (typeof actions === 'function') {
      return actions({
        ...passedProps,
        Item: StyledItem,
      })
    }

    return actions.map((action, key) => {
      const props = {
        ...(action.props || {}),
        key: `action-${key}`,
        destructive: action.type === 'destructive',
      }
      if (action.render) {
        action.type = 'component'
      }
      switch (action.type) {
        case 'separator':
          return <StyledSeparator {...props} />
        case 'heading':
          return <StyledHeading {...props}>{action.name}</StyledHeading>
        case 'component':
          return (
            <StyledItem {...props}>
              <action.render />
            </StyledItem>
          )
        default:
          return (
            <StyledItem
              {...props}
              onClick={e => {
                e.stopPropagation()
                action.action(e, passedProps)
                this.closeMenu()
              }}
            >
              {action.name}
            </StyledItem>
          )
      }
    })
  }

  render () {
    const {
      right,
      actions,
      renderTrigger,
      dialogStyles = {},
      ...props
    } = this.props
    const { open } = this.state

    return (
      <StyledWrapper {...props} data-genus='Dropdown'>
        {renderTrigger({
          onClick: this.toggle,
        })}
        <StyledDropdown
          ref={ref => {
            this.dd = findDOMNode(ref)
          }}
          open={open}
          right={right}
        >
          <StyledMobileClose
            onClick={e => {
              e.stopPropagation()
              this.closeMenu()
            }}
          >
            X
          </StyledMobileClose>
          {this.renderActions(actions)}
        </StyledDropdown>
      </StyledWrapper>
    )
  }
}

Dropdown.propTypes = {
  actions: T.oneOfType([T.array, T.func]).isRequired,
  right: T.bool,
  renderTrigger: T.func,
  dialogStyles: T.object,
}

export default Dropdown
