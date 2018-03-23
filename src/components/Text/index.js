import React from 'react'
import T from 'prop-types'

import { StyledText } from './styled'

const Text = props =>
  <StyledText {...props}>{props.children}</StyledText>

export default Text
