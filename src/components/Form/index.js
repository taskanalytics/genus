import React, { Component } from 'react'
import T from 'prop-types'
import {
  StyledWrapper,
  StyledInput,
} from './styled'

import Text from '../Text'

class Input extends Component {
  render () {
    const { label, error, ...rest } = this.props

    return (
      <StyledWrapper error={error}>
        <Text small muted
          fontSize={['12px']}
          css={{
            textTransform: 'uppercase',
          }}>{label}</Text>
        <StyledInput error={error} {...rest} />
      </StyledWrapper>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  Input.propTypes = {
    label: T.string,
    error: T.oneOfType([ T.string, T.bool ]),
    placeholder: T.string,
    type: T.oneOf(['text', 'email', 'number']),
  }
}

export { Input }
