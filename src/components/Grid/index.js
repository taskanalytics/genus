import React, { Component } from 'react'
import T from 'prop-types'

import StyledGrid from './styled'

const Grid = props => <StyledGrid {...props}>{props.children}</StyledGrid>

if (process.env.NODE_ENV !== 'production') {
  Grid.propTypes = {
    tight: T.bool,
    wide: T.bool,
    row: T.bool,
  }
}


export default Grid
