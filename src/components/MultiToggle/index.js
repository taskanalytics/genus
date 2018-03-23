import React, {PureComponent} from 'react'
import T from 'prop-types'

import {
  StyledWrapper,
  StyledRadio,
  StyledLabel,
} from './styled'

const returnFirst = test => test

const Option = ({name, value, active, onChange, destructive}) =>
  <StyledLabel destructive={destructive} active={active}>
    <StyledRadio type='radio' id={value} checked={active} onClick={onChange} />
    {name}
  </StyledLabel>

class MultiToggle extends PureComponent {
  render () {
    const {
      options,
      selectedOption,
      onSelectOption,
    } = this.props

    return (
      <StyledWrapper>
        {options.filter(returnFirst).map((option) =>
          <Option
            key={option.value}
            name={option.name}
            value={option.value}
            destructive={option.destructive}
            active={selectedOption === option.value}
            onChange={() => onSelectOption(option.value)} />
        )}
      </StyledWrapper>
    )
  }
}

export default MultiToggle
