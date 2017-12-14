import React, { Component } from 'react'
import T from 'prop-types'

import { StyledText } from './styled'

export default Text = props =>
  <StyledText {...props}>{props.children}</StyledText>
