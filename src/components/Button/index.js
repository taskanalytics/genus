import React, { PureComponent } from 'react'
import T from 'prop-types'

import StyledButton from './styled'

function Button ({ to, ...props }) {
  const buttonProps = {
    ...props,
  }

  if (typeof props.loading === 'string') {
    buttonProps.children = props.loading
  }

  if (to) {
    buttonProps.as = 'a'
    buttonProps.href = to
  }

  return <StyledButton {...buttonProps} data-genus='Button' />
}

Button.defaultProps = {
  type: 'button',
  uppercase: true,
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
  uppercase: T.bool,
}

export default Button
