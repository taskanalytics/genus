import React, { Component } from 'react'
import T from 'prop-types'
import {
  StyledWrapper,
  StyledInput,
  StyledLabel,
  StyledError,
  StyledValidatedMark,
} from './styled'

import { Flex } from '../Grid'

const ValidationMark = ({ value, error }) => {
  if (error) {
    return <span>❌</span>
  }
  if (!error && value && value.trim() !== '') {
    return <StyledValidatedMark />
  }

  return null
}

class Input extends Component {
  render () {
    const { label, error, renderAfter, value, ...rest } = this.props
    return (
      <React.Fragment>
        <StyledWrapper error={error}>
          <StyledLabel>{label}</StyledLabel>
          <Flex w={1} alignItems="center">
            <StyledInput
              error={error}
              value={value}
              {...rest}
            />
            { renderAfter && <span>{renderAfter({ label, error, value, ...rest })}</span> }
            { !renderAfter && <ValidationMark value={value} error={error} /> }
          </Flex>
        </StyledWrapper>
        {error && <StyledError> {error} </StyledError>}
      </React.Fragment>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  ValidationMark.propTypes = {
    value: T.string,
    error: T.oneOfType([ T.string, T.bool ]),
  }

  Input.propTypes = {
    label: T.string,
    value: T.string,
    error: T.oneOfType([ T.string, T.bool ]),
    placeholder: T.string,
    type: T.oneOf(['text', 'email', 'number', 'password']),
    renderAfter: T.func,
  }
}

export default Input
