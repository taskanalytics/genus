import styled from '@emotion/styled'
import shouldForwardProp, {
  createShouldForwardProp,
  props,
} from '@styled-system/should-forward-prop'

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
  justifyItems,
  alignItems,
  system,
  compose,
} from 'styled-system'

const shouldForwardFlexProp = createShouldForwardProp([...props, 'wrap'])
const gridShorthand = system({ grid: true })

export const StyledBox = styled('div')(
  compose(
    layout,
    space,
    flexbox,
    color,
    border,
    textAlign,
    shadow,
    position,
  ),
)

export const StyledFlex = styled(StyledBox, {
  shouldForwardProp: shouldForwardFlexProp,
})(({ wrap }) => ({
  display: 'flex',
  flexWrap: wrap ? 'wrap' : null,
}))

export const StyledGrid = styled('div', { shouldForwardProp })(
  { display: 'grid' },
  compose(
    grid,
    gridShorthand,
    layout,
    space,
    color,
    border,
    position,
    justifyItems,
    alignItems,
  ),
)

export const StyledContainer = styled(StyledBox)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  paddingLeft: theme.space[2],
  paddingRight: theme.space[2],
}))
