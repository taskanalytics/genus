import React, { Component } from 'react'
import T from 'prop-types'

import StyledGrid from './styled'

export default class Grid extends Component {
  static propTypes = {
    tight: T.bool,
    wide: T.bool,
    row: T.bool,
  }

  render () {
    return (
      <StyledGrid {...this.props}>
        {this.props.children}
      </StyledGrid>
    )
  }
}
