import glamorous from 'glamorous'
import withIsProp from '../../utils/withIsProp'
import { width, space, color, textAlign } from 'styled-system'

export const StyledHeading = withIsProp(glamorous('h1')(
  [{
    //
  }],
  width,
  space,
  color,
  textAlign,
))
