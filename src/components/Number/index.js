import React, { Component } from 'react'
import T from 'prop-types'
import {DL, DT, DD} from './styled'

class NumberComponent extends Component {
  render () {
    const {size, sup, value, description} = this.props

    return (
      <DL size={size}>
        <DT size={size}>{value}{sup && <sup>{sup}</sup>}</DT>
        <DD size={size}>{description}</DD>
      </DL>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  NumberComponent.propTypes = {
    value: T.oneOfType([T.string, T.number]).isRequired,
    description: T.string.isRequired,
    size: T.oneOf(['small', 'large']),
    sup: T.string,
  }
}

export default NumberComponent
