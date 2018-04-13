import glamorous from 'glamorous'
import withIsProp from '../../utils/withIsProp'
import {
  width,
  space,
  color,
  textAlign,
  fontSize,
  fontWeight,
  lineHeight,
} from 'styled-system'

export const StyledHeading = withIsProp(glamorous('h1')(
  width,
  space,
  color,
  textAlign,
  fontWeight,
  fontSize,
  lineHeight
))
