import React, { Component } from 'react'
import T from 'prop-types'
import {
  StyledCheckRadioLabel,
  StyledCheckRadio,
  StyledLabelCheckRadio,
  StyledCheckBoxIndicator,
  StyledCheckBoxMark,
} from './styled'

class CheckBox extends Component {
  render () {
    const { label, error, ...rest } = this.props

    return (
      <StyledCheckRadioLabel error={error}>
        <StyledCheckRadio type="checkbox" error={error} {...rest}>
        </StyledCheckRadio>
        <StyledCheckBoxIndicator>
          <StyledCheckBoxMark />
        </StyledCheckBoxIndicator>
        <StyledLabelCheckRadio>{label}</StyledLabelCheckRadio>
      </StyledCheckRadioLabel>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  CheckBox.propTypes = {
    label: T.string,
    error: T.oneOfType([ T.string, T.bool ]),
    placeholder: T.string,
    value: T.string,
  }
}

export default CheckBox
