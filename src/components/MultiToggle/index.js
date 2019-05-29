/** @jsx jsx */ import React, { PureComponent } from 'react'
import T from 'prop-types'
import { jsx } from '@emotion/core'

import { StyledWrapper, StyledRadio, StyledLabel } from './styled'

const returnFirst = test => test

const Option = ({ name, value, active, onChange, ...props }) => (
  <StyledLabel active={active} {...props}>
    <StyledRadio type='radio' checked={active} onChange={onChange} />
    {name}
  </StyledLabel>
)

class MultiToggle extends PureComponent {
  render () {
    const { options, selectedOption, onSelectOption, ...props } = this.props

    return (
      <StyledWrapper {...props} data-genus='MultiToggle'>
        {options.filter(Boolean).map(option => (
          <Option
            key={option.value}
            name={option.name}
            value={option.value}
            destructive={option.destructive}
            direction={props.direction}
            block={props.block}
            active={selectedOption === option.value}
            onChange={() => onSelectOption(option.value)}
          />
        ))}
      </StyledWrapper>
    )
  }
}

Option.propTypes = {
  name: T.string,
  value: T.string,
  active: T.bool,
  onChange: T.func,
  destructive: T.bool,
}

MultiToggle.propTypes = {
  options: T.array.isRequired,
  selectedOption: T.string,
  onSelectOption: T.func,
  direction: T.string,
}
MultiToggle.defaultProps = {
  direction: 'row',
}

export default MultiToggle
