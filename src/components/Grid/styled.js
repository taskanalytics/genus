import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'

import {
  layout,
  space,
  flexbox,
  color,
  grid,
  border,
  shadow,
  textAlign,
  position,
  overflow,
} from 'styled-system'

export const StyledBox = styled('div')(
  layout,
  space,
  flexbox,
  color,
  border,
  textAlign,
  shadow,
  position,
)

export const StyledFlex = styled(StyledBox, {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'wrap',
})(({ wrap }) => ({
  display: 'flex',
  flexWrap: wrap ? 'wrap' : 'initial',
}))

export const StyledGrid = styled('div', {
  shouldForwardProp: isPropValid,
})({ display: 'grid' }, grid, layout, space, color, border, position)

export const StyledContainer = styled(StyledBox)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  paddingLeft: theme.space[2],
  paddingRight: theme.space[2],
}))
