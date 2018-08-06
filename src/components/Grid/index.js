import React from 'react'
import T from 'prop-types'

import {
  StyledBox,
  StyledContainer,
  StyledFlex,
} from './styled'

export const Box = StyledBox

export const Flex = StyledFlex

export const Container = props => <StyledContainer px={2} {...props} />

if (process.env.NODE_ENV !== 'production') {
  Container.propTypes = { fluid: T.bool }
}
