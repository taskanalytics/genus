import styled from "@emotion/styled";
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

export const StyledHeading = withIsProp(styled('h1')({
  margin: 0,
},
width,
space,
color,
textAlign,
fontWeight,
fontSize,
lineHeight
))
