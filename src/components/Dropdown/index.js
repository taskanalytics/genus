import React from 'react'
import T from 'prop-types'

import { StyledDropdown, StyledOption, StyledSeparator } from './styled'

export const Option = props =>
  <StyledOption role="button" tabindex="0" {...props}>{props.children}</StyledOption>

export const Separator = props => <StyledSeparator />

const Dropdown = props =>
  <StyledDropdown>{props.children}</StyledDropdown>

export default Dropdown
