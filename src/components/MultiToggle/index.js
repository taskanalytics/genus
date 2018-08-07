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
    <StyledRadio type='radio' id={value} checked={active} onChange={onChange} />
    {name}
  </StyledLabel>

class MultiToggle extends PureComponent {
  render () {
    const {
      options,
      selectedOption,
      onSelectOption,
      ...props
    } = this.props

    return (
      <StyledWrapper {...props}>
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

if (process.env.NODE_ENV !== 'production') {
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
  }
}

export default MultiToggle
