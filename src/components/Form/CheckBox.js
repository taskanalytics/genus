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
    const { label, error, touched, ...rest } = this.props

    return (
      <StyledCheckRadioLabel touched={touched} error={error}
        data-genus="CheckBox"
      >
        <StyledCheckRadio type="checkbox" touched={touched} error={error} {...rest}>
        </StyledCheckRadio>
        <StyledCheckBoxIndicator touched={touched} error={error}>
          <StyledCheckBoxMark />
        </StyledCheckBoxIndicator>
        <StyledLabelCheckRadio touched={touched} error={error}>{label}</StyledLabelCheckRadio>
      </StyledCheckRadioLabel>
    )
  }
}

CheckBox.propTypes = {
  label: T.string,
  error: T.oneOfType([ T.string, T.bool ]),
  placeholder: T.string,
  value: T.string,
  touched: T.bool,
}

export default CheckBox
