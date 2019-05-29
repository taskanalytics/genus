import React, { Component } from 'react'
import T from 'prop-types'
import {
  StyledWrapper,
  StyledSelect,
  StyledCaret,
  StyledAfter,
  StyledLabel,
} from './styled'

const defaultRenderAfter = props => <StyledCaret {...props} />

class Select extends Component {
  static defaultProps = {
    renderAfter: defaultRenderAfter,
  }

  render () {
    const { label, error, renderAfter, children, ...rest } = this.props

    return (
      <StyledWrapper error={error} data-genus='Select'>
        <StyledLabel>{label}</StyledLabel>
        <StyledSelect error={error} {...rest}>
          {children}
        </StyledSelect>
        <StyledAfter>{renderAfter({ label, error, ...rest })}</StyledAfter>
      </StyledWrapper>
    )
  }
}

Select.propTypes = {
  label: T.string,
  error: T.oneOfType([T.string, T.bool]),
  placeholder: T.string,
  value: T.string,
  renderAfter: T.func,
}

export default Select
