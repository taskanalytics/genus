import React from 'react'
import T from 'prop-types'

import {
  StyledBox,
  StyledContainer,
  StyledFlex,
} from './styled'

export const Box = p => <StyledBox {...p} data-genus="Box" />

export const Flex = p => <StyledFlex {...p} data-genus="Flex" />

export const Container = p => <StyledContainer {...p} data-genus="Container" />
