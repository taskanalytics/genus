import React, { Component } from 'react'
import T from 'prop-types'
import {
  StyledCheckLabel,
  StyledCheckBox,
  StyledLabel,
  StyledCheckBoxIndicator,
  StyledCheckBoxMark,
} from './styled'

class CheckBox extends Component {
  render () {
    const { label, error, ...rest } = this.props

    return (
      <StyledCheckLabel error={error}>
        <StyledCheckBox type="checkbox" error={error} {...rest}>
        </StyledCheckBox>
        <StyledCheckBoxIndicator>
          <StyledCheckBoxMark />
        </StyledCheckBoxIndicator>
        <StyledLabel css={{marginLeft: '22px', verticalAlign: 'baseline'}}>{label}</StyledLabel>
      </StyledCheckLabel>
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
