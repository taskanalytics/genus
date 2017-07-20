import React, {PureComponent} from 'react'
import glamorous from 'glamorous'

import StyledButton from './styled'
const StyledLink = StyledButton.withComponent('a')

export default class Button extends PureComponent {
  render () {
    const {
      children,
      to,
      ...props,
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
