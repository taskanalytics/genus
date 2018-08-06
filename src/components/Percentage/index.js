import React from 'react'
import T from 'prop-types'
import { StyledWrapper } from './styled'
import NumberComponent from '../Number'

const Percentage = props =>
  <StyledWrapper colored={props.colored} value={props.value}>
    <NumberComponent {...props} suffix='%' />
  </StyledWrapper>

if (process.env.NODE_ENV !== 'production') {
  Percentage.propTypes = {
    colored: T.oneOfType([T.string, T.bool]),
    value: T.number,
  }
}

export default Percentage
