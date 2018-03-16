import glamorous from 'glamorous'
import withIsProp from '../../utils/withIsProp'
import width from 'styled-system/dist/width'
import space from 'styled-system/dist/space'
import color from 'styled-system/dist/color'
import borderWidth from 'styled-system/dist/border-width'
import borderRadius from 'styled-system/dist/border-radius'
import borderColor from 'styled-system/dist/border-color'
import flexWrap from 'styled-system/dist/flex-wrap'
import flexDirection from 'styled-system/dist/flex-direction'
import alignSelf from 'styled-system/dist/align-self'
import alignItems from 'styled-system/dist/align-items'
import justifyContent from 'styled-system/dist/justify-content'

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
