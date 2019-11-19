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

  static getDerivedStateFromProps (props, state) {
    if (props.open === true) {
      return { ...state, open: true }
    }
    return { ...state }
  }

  closeMenu = () => {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose()
    }
    this.setState({ open: false })
  }

  onClickOutside = event => {
    if (this.dd && !this.dd.contains(event.target)) {
      this.closeMenu()
    }
  }

  addListener = () => {
    document.addEventListener('click', this.onClickOutside)
  }

  removeListener = () => {
    document.removeEventListener('click', this.onClickOutside)
  }

  toggle = event => {
    event.preventDefault()
    event.stopPropagation()
    const open = !this.state.open
    this.setState({ open })
  }

  componentDidUpdate () {
    if (this.state.open) {
      this.addListener()
    } else {
      this.removeListener()
    }
  }

  componentDidMount () {
    if (this.state.open) {
      this.addListener()
    }
  }

  componentWillUnmount () {
    this.removeListener()
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
      const type = typeof action
      if (type === 'function') {
        action = {
          props: {},
          type: 'function',
          render: action,
        }
      } else if (type === 'string' && action === '-') {
        action = { type: 'separator' }
      }
      const props = {
        ...(action.props || {}),
        key: `action-${key}`,
        destructive: action.type === 'destructive',
      }
      if (action.render && action.type !== 'function') {
        action.type = 'component'
      }
      switch (action.type) {
        case 'separator':
          return <StyledSeparator {...props} />
        case 'heading':
          return <StyledHeading {...props}>{action.name}</StyledHeading>
        case 'function':
          return <action.render wrapper={StyledItem} />
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
    const { bg, right, actions, renderTrigger, ...props } = this.props
    const { open } = this.state

    return (
      <StyledWrapper {...props} data-genus='Dropdown'>
        {renderTrigger({
          onClick: this.toggle,
          open,
        })}
        {open && (
          <StyledDropdown
            ref={ref => {
              this.dd = findDOMNode(ref)
            }}
            bg={bg}
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
        )}
      </StyledWrapper>
    )
  }
}

Dropdown.propTypes = {
  actions: T.oneOfType([T.array, T.func]).isRequired,
  right: T.bool,
  renderTrigger: T.func,
}

export default Dropdown
