import styled from '@emotion/styled'
import shouldForwardProp from '../../utils/should-forward-prop'
import {
  width,
  space,
  color,
  textAlign,
  fontSize,
  fontWeight,
  lineHeight,
} from 'styled-system'

export const StyledHeading = styled('h1', { shouldForwardProp })(
  { margin: 0 },
  width,
  space,
  color,
  textAlign,
  fontWeight,
  fontSize,
  lineHeight,
)
