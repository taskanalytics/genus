import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import {
  borderRadius,
  width,
  maxWidth,
  height,
  maxHeight,
  display,
  space,
  borders,
  alignSelf,
  justifySelf,
  boxShadow,
} from 'styled-system'

import { Box } from '../Grid'

export const Wrapper = styled('figure')(
  {
    display: 'inline-block',
    fontSize: 0,
    lineHeight: 0,
    padding: 0,
    margin: 0,
  },
  space,
  width,
  height,
  display,
  alignSelf,
  justifySelf,
  borders,
  boxShadow,
  borderRadius
)
export const StyledImage = styled('img', {
  shouldForwardProp: prop => isPropValid(prop) || prop === 'srcset',
})(
  ({ width }) => ({
    overflow: 'hidden',
    maxWidth: width ? null : '100%',
  }),
  borderRadius,
)

export const propTypes = {
  ...StyledImage.propTypes,
}
