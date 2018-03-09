import React, { Component } from 'react'
import T from 'prop-types'

import {
  StyledBox,
  StyledContainer,
  StyledFlex,
} from './styled'

export class Box extends Component {
  render () {
    return <StyledBox {...this.props} />
  }
}

export const Flex = props =>
  <StyledFlex {...props}>{props.children}</StyledFlex>

export const Container = props =>
  <StyledContainer px={2} {...props}>{props.children}</StyledContainer>

if (process.env.NODE_ENV !== 'production') {
  Container.propTypes = {
    tight: T.bool,
    wide: T.bool,
    row: T.bool,
  }
}
