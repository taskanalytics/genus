import React, { Component } from 'react'
import T from 'prop-types'
import {
  StyledWrapper,
  StyledInput,
  StyledLabel,
} from './styled'

import Text from '../Text'
import { Flex } from '../Grid'

class Input extends Component {
  render () {
    const { label, error, renderAfter, ...rest } = this.props

    return (
      <StyledWrapper error={error}>
        <StyledLabel>{label}</StyledLabel>
        <Flex w={1} alignItems="center">
          <StyledInput
            error={error}
            {...rest}
          />
          { renderAfter && <span>{renderAfter({ label, error, ...rest })}</span> }
        </Flex>
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

export default Input
