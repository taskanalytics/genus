import React, { Component } from 'react'
import T from 'prop-types'
import {Dl, Dt, Dd, Suffix} from './styled'
const StyledSpan = Dt.withComponent('span')

class NumberComponent extends Component {
  render () {
    const {size, prefix, suffix, value, description, ...props} = this.props

    if (description) {
      return (
        <Dl size={size}
          data-genus="Number"
        >
          <Dt size={size}>{prefix && prefix}{value}{suffix && <Suffix>{suffix}</Suffix>}</Dt>
          <Dd size={size}>{description}</Dd>
        </Dl>
      )
    }
    return (
      <StyledSpan size={size} {...props} data-genus="Number">
        {prefix && prefix}{value}{suffix && <Suffix>{suffix}</Suffix>}
      </StyledSpan>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  NumberComponent.propTypes = {
    value: T.oneOfType([T.string, T.number]).isRequired,
    description: T.string,
    size: T.oneOf(['small', 'large', 'display']),
    suffix: T.string,
    prefix: T.string,
  }
}

export default NumberComponent
