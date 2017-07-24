import React, { Component } from 'react'
import T from 'prop-types'
import {DL, DT, DD} from './styled'

export default class Number extends Component {
  static propTypes = {
    value: T.oneOfType([T.string, T.number]).isRequired,
    description: T.string.isRequired,
    size: T.oneOf(['small', 'large']),
    sup: T.string,
  }

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
