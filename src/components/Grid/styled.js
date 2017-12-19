import glamorous from 'glamorous'
import {
  width,
  space,
  flexWrap,
  alignItems,
  justifyContent,
  flexDirection,
  alignSelf
} from 'styled-system'

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

export const StyledRow = glamorous(StyledFlex)([
  {
    //backgroundColor: 'green',
  }],
)
