import React, { Component } from 'react'
import T from 'prop-types'
import {
  StyledWrapper,
  StyledInput,
  StyledLabel,
  StyledError,
} from './styled'

import { Flex } from '../Grid'

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
            { !renderAfter && !error && value.trim() !== '' && <span style={
              {width: '8px',
              height: '14px',
              border: 'solid #61ad0f',
              borderWidth: '0 3.5px 3.5px 0',
              transform: 'rotate(45deg)',
              marginRight: '10px'}
            }></span>}

            { !renderAfter && error  && <span>❌</span>}
          </Flex>
        </StyledWrapper>
        {error && <StyledError> {error} </StyledError>}
      </React.Fragment>
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
