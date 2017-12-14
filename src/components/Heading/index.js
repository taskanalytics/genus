import React, { Component } from 'react'
import T from 'prop-types'

import { StyledHeading } from './styled'

const Heading = props =>
  <StyledHeading {...props}>{props.children}</StyledHeading>

export default Heading
