import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'

import {
  style,
  width,
  maxWidth,
  height,
  maxHeight,
  display,
  space,
  color,
  borderRadius,
  borderColor,
  flex,
  flexWrap,
  flexDirection,
  alignSelf,
  alignItems,
  justifyContent,
  textAlign,
} from 'styled-system'

const borderWidth = style({
  prop: 'borderWidth',
  transformValue: n => n+'px',
  scale: [0, 1, 2, 4, 6],
})

export const StyledBox = styled('div')(
  width,
  maxWidth,
  height,
  maxHeight,
  display,
  space,
  color,
  borderWidth,
  borderColor,
  borderRadius,
  textAlign,
  flex
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
  alignSelf
)

export const StyledContainer = styled(StyledBox)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  paddingLeft: theme.space[2],
  paddingRight: theme.space[2],
}))
