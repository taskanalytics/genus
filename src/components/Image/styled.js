import styled from '@emotion/styled'
import {
  createShouldForwardProp,
  props,
} from '@styled-system/should-forward-prop'
import {
  compose,
  layout,
  space,
  border,
  alignSelf,
  justifySelf,
  boxShadow,
} from 'styled-system'

import { Box } from '../Grid'

const shouldForwardProp = createShouldForwardProp([...props, 'srcset'])

export const Wrapper = styled('figure')(
  {
    display: 'inline-block',
    fontSize: 0,
    lineHeight: 0,
    padding: 0,
    margin: 0,
  },
  compose(
    space,
    layout,
    alignSelf,
    justifySelf,
    border,
    boxShadow,
  ),
)
export const StyledImage = styled('img', { shouldForwardProp })(
  ({ width }) => ({
    overflow: 'hidden',
    maxWidth: width ? null : '100%',
  }),
  border,
)

export const propTypes = {
  ...StyledImage.propTypes,
}
