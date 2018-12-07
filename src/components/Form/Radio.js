import React, { Component } from 'react'
import T from 'prop-types'
import {
  StyledCheckRadioLabel,
  StyledCheckRadio,
  StyledRadioIndicator,
  StyledRadioMark,
  StyledLabelCheckRadio,
} from './styled'

class Radio extends Component {
  render () {
    const { label, error, ...rest } = this.props

    return (
      <StyledCheckRadioLabel error={error}
        data-genus="Radio"
      >
        <StyledCheckRadio type="radio" error={error} {...rest}>
        </StyledCheckRadio>
        <StyledRadioIndicator>
          <StyledRadioMark />
        </StyledRadioIndicator>
        <StyledLabelCheckRadio>{label}</StyledLabelCheckRadio>
      </StyledCheckRadioLabel>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  Radio.propTypes = {
    label: T.string,
    error: T.oneOfType([ T.string, T.bool ]),
    placeholder: T.string,
    value: T.string,
  }
}

export default Radio
