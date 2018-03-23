import glamorous from 'glamorous'
import withIsProp from '../../utils/withIsProp'
import {
  width,
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
} from 'styled-system'

export const StyledBox = withIsProp(glamorous('div')(
  [{}],
  width,
  space,
  color,
  borderWidth,
  borderColor,
  borderRadius
))

export const StyledFlex = glamorous(StyledBox)([
  {
    display: 'flex',
  }],
flexWrap,
alignItems,
justifyContent,
flexDirection,
alignSelf
)

export const StyledContainer = glamorous(StyledBox)({},
  props => {
    if (!props.fluid) {
      return {
        maxWidth: '1200px',
        margin: '0 auto',
      }
    }
  })
