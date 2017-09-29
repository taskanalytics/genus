import React, {PureComponent} from 'react'
import T from 'prop-types'

import StyledButton from './styled'
const StyledLink = StyledButton.withComponent('a')

class Button extends PureComponent {
  static defaultProps = {
    type: 'button',
  }

  render () {
    const {
      children,
      to,
      ...props
    } = this.props

    if (to) {
      return (
        <StyledLink {...props} href={to}>
          {children}
        </StyledLink>
      )
    }

    return (<StyledButton {...props}>
      {children}
    </StyledButton>)
  }
}

if (process.env.NODE_ENV !== 'production') {
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
    to: T.string,
    type: T.oneOf(['button', 'submit']),
  }
}

export default Button
