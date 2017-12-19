import glamorous from 'glamorous'
import width from 'styled-system/dist/width'
import space from 'styled-system/dist/space'
import flexWrap from 'styled-system/dist/flex-wrap'
import flexDirection from 'styled-system/dist/flex-direction'
import alignSelf from 'styled-system/dist/align-self'
import alignItems from 'styled-system/dist/align-items'
import justifyContent from 'styled-system/dist/justify-content'

function withIsProp (Component) {
  return ({ is, ...props }) => {
    const Resolved = is ? Component.withComponent(is) : Component
    return <Resolved {...props} />
  }
}

export const StyledBox = withIsProp(glamorous('div')(
  [{}],
  width,
  space
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

export const StyledContainer = glamorous(StyledBox)({
  // Styles go here
}, props => {
  if (!props.fluid) {
    return {
      maxWidth: '1200px',
      margin: '0 auto',
    }
  }
})
