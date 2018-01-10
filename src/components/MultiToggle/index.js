import React, {PureComponent} from 'react'
import T from 'prop-types'

import {
  StyledForm,
  StyledRadio,
  StyledLabel,
} from './styled'

class MultiToggle extends PureComponent {

  render () {

    const {
      options,
      selectedOption,
      onSelectOption
    } = this.props

    const Option = ({name, value, active, onChange, destructive}) =>
      <StyledLabel destructive={destructive} active={active}>
        <StyledRadio type='radio' id={value} checked={active} onClick={onChange} />
        {name}
      </StyledLabel>

    return (
      <StyledForm>
        {options.map((option) =>
          <Option
            key={option.value}
            name={option.name}
            value={option.value}
            destructive={option.destructive}
            active={selectedOption === option.value}
            onChange={() => onSelectOption(option.value)} />
        )}
      </StyledForm>
    )

  }
}

export default MultiToggle
