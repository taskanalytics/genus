import React, { Component } from 'react'
import T from 'prop-types'

import { StyledGrid, StyledFlex, StyledRow, StyledBox } from './styled'

export const Grid = props =>
  <StyledGrid px2 {...props}>{props.children}</StyledGrid>

export const Flex = props =>
  <StyledFlex {...props}>{props.children}</StyledFlex>

export const Row = props =>
  <StyledRow {...props}>{props.children}</StyledRow>

export const Box = props =>
  <StyledBox {...props}>{props.children}</StyledBox>

if (process.env.NODE_ENV !== 'production') {
  Grid.propTypes = {
    tight: T.bool,
    wide: T.bool,
    row: T.bool,
  }
}
