import React, { Component } from 'react'
import T from 'prop-types'
import {
  StyledWrapper,
  StyledSelect,
  StyledCaret,
  StyledAfter,
} from './styled'

import Text from '../Text'
import { Flex } from '../Grid'

const StyledLabel = (props) => (
  <Text
    small muted
    fontSize={['12px']}
    css={{ textTransform: 'uppercase' }}
    {...props} />
)

const defaultRenderAfter = () => <StyledCaret />

class Select extends Component {
  static defaultProps = {
    renderAfter: defaultRenderAfter,
  }

  render () {
    const { label, error, renderAfter, ...rest } = this.props

    return (
      <StyledWrapper error={error}>
        <StyledLabel>{label}</StyledLabel>
          <StyledSelect
            error={error}
            {...rest}
          />
          { renderAfter && (
            <StyledAfter>{
              renderAfter({ label, error, ...rest }) || defaultRenderAfter()
            }</StyledAfter>
          ) }
      </StyledWrapper>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  Select.propTypes = {
    label: T.string,
    error: T.oneOfType([ T.string, T.bool ]),
    placeholder: T.string,
    value: T.string,
  }
}

export default Select
