import React, {Component} from 'react'
import enhanceWithClickOutside from 'react-click-outside'
import {Transition} from 'react-transition-group'
import T from 'prop-types'

import {
  StyledList,
  StyledOption,
  StyledSeparator
} from './styled'

export const Option = props =>
  <StyledOption role="button" tabindex="0" {...props}>{props.children}</StyledOption>

export const Separator = props =>
  <StyledSeparator />

const Fade = ({ children, in: inProp }) => (
  <Transition
    in={inProp}
    timeout={0}
    mountOnEnter={true}
    unmountOnExit={true}>
    {(state) => (
      <StyledList {...state}>
        {children}
      </StyledList>
    )}
  </Transition>
)

class Dropdown extends Component {

  state = {
    isOpened: false
  }

  handleClickOutside = e => {
    e.preventDefault()
    e.stopPropagation()
    this.toggle()
  }

  toggle() {
    this.setState({ isOpened: !this.state.isOpened })
  }

  render () {
    const {show, children} = this.props
    const {isOpened} = this.state
    return (
      <Fade
        wrappedRef={instance => { this.toggle = instance.toggle }}
        in={isOpened}>
        {children}
      </Fade>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  Dropdown.propTypes = {
    show: T.bool.isRequired,
  }
}

export default enhanceWithClickOutside(Dropdown)
