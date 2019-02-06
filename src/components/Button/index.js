import React, { PureComponent } from 'react'
import T from 'prop-types'

import StyledButton from './styled'
const StyledLink = StyledButton.withComponent('a')

class Button extends PureComponent {
  static defaultProps = {
    type: 'button',
  }

  render () {
    const {
      to,
      ...props
    } = this.props

    if (typeof this.props.loading === 'string') {
      props.children = this.props.loading
    }

    if (to) {
      return <StyledLink {...props} href={to} data-genus="Button" />
    }

    return <StyledButton {...props} data-genus="Button" />
  }
}

Button.propTypes = {
  block: T.bool,
  children: T.node,
  compact: T.bool,
  inverted: T.bool,
  link: T.bool,
  primary: T.bool,
  primaryinverted: T.bool,
  warning: T.bool,
  spaceless: T.bool,
  loading: T.oneOfType([T.bool, T.string]),
  to: T.string,
  type: T.oneOf(['button', 'submit']),
}

export default Button
