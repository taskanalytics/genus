import React, { Component } from 'react'
import T from 'prop-types'
import { Dl, Dt, Dd, Suffix } from './styled'
const StyledSpan = Dt.withComponent('span')

const sizeMap = {
  small: 1,
  large: 26,
  display: 44,
  default: 2,
}

class NumberComponent extends Component {
  render () {
    const { prefix, suffix, value, description, color, ...props } = this.props
    const size = this.props.size || 'default'
    const fontSize = size in sizeMap ? sizeMap[size] : sizeMap.default

    if (description) {
      return (
        <Dl data-genus="Number" {...props}>
          <Dt
            fontSize={fontSize}
            color={color}
          >
            {prefix && prefix}{value}{suffix && <Suffix>{suffix}</Suffix>}
          </Dt>
          <Dd size={size}>{description}</Dd>
        </Dl>
      )
    }
    return (
      <StyledSpan
        fontSize={fontSize}
        size={size}
        color={color}
        {...props}
        data-genus="Number"
      >
        {prefix && prefix}{value}{suffix && <Suffix>{suffix}</Suffix>}
      </StyledSpan>
    )
  }
}

NumberComponent.propTypes = {
  value: T.oneOfType([T.string, T.number]).isRequired,
  description: T.string,
  size: T.oneOf(['small', 'large', 'display']),
  suffix: T.string,
  prefix: T.string,
}

export default NumberComponent
