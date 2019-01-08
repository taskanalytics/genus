import React from 'react'
import T from 'prop-types'
import { StyledWrapper } from './styled'
import NumberComponent from '../Number'

const Percentage = props =>
  <StyledWrapper colored={props.colored} value={props.value}
    data-genus="Percentage"
  >
    <NumberComponent {...props} suffix='%' />
  </StyledWrapper>

Percentage.propTypes = {
  colored: T.oneOfType([T.string, T.bool]),
  value: T.oneOfType([T.number, T.string]),
}

export default Percentage
