import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'

import {
  width,
  maxWidth,
  minWidth,
  minHeight,
  height,
  maxHeight,
  display,
  space,
  color,
  borders,
  flex,
  flexWrap,
  flexDirection,
  alignSelf,
  alignItems,
  justifyContent,
  justifySelf,
  textAlign,
  boxShadow,
  position,
  overflow,
} from 'styled-system'

export const StyledBox = styled('div')(
  width,
  minWidth,
  minHeight,
  maxWidth,
  height,
  maxHeight,
  display,
  space,
  color,
  borders,
  textAlign,
  flex,
  boxShadow,
  alignSelf,
  justifySelf,
  position,
  overflow
)

export const StyledFlex = styled(StyledBox, {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'wrap',
})(
  ({ wrap }) => ({
    display: 'flex',
    flexWrap: wrap ? 'wrap' : 'initial',
  }),
  flexWrap,
  alignItems,
  justifyContent,
  flexDirection,
)

export const StyledContainer = styled(StyledBox)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  paddingLeft: theme.space[2],
  paddingRight: theme.space[2],
}))
