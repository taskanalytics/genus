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

export const StyledBox = glamorous('div')([
  {

  }],
  width,
  space
)

export const StyledFlex = glamorous('div')([
  {
    display: 'flex',
  }],
  width,
  space,
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
