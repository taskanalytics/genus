import styled from '@emotion/styled'
import shouldForwardProp from '../../utils/should-forward-prop'
import { width, space, color, typography, compose } from 'styled-system'

export const StyledHeading = styled('h1', { shouldForwardProp })(
  { margin: 0 },
  compose(
    width,
    space,
    color,
    typography,
  ),
)
