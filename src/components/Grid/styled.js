import glamorous from 'glamorous'
import withIsProp from '../../utils/withIsProp'
import {
  width,
  maxWidth,
  height,
  maxHeight,
  display,
  space,
  color,
  borderWidth,
  borderRadius,
  borderColor,
  flexWrap,
  flexDirection,
  alignSelf,
  alignItems,
  justifyContent,
  textAlign,
} from 'styled-system'

export const StyledBox = withIsProp(glamorous('div', {displayName: 'Box'})(
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
  textAlign
))

export const StyledFlex = glamorous(StyledBox, {displayName: 'Flex'})(
  { display: 'flex' },
  flexWrap,
  alignItems,
  justifyContent,
  flexDirection,
  alignSelf
)

export const StyledContainer = glamorous(StyledBox, {displayName: 'Container'})(
  ({ theme }) => ({
    paddingLeft: theme.space[2],
    paddingRight: theme.space[2],
  })
)
