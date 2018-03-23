import React from 'react'
import { StyledWrapper } from './styled'
import NumberComponent from '../Number'

const Percentage = props =>
  <StyledWrapper colored={props.colored} value={props.value}>
    <NumberComponent {...props} suffix='%' />
  </StyledWrapper>

export default Percentage
