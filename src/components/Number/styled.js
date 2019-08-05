import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import css from '@styled-system/css'
import { compose, color, space, width, typography } from 'styled-system'

export const Dl = styled.dl(
  {
    fontVariantNumeric: 'tabular-nums',
    fontFeatureSettings: 'tnum',
    margin: 0,
    padding: 0,
  },
  compose(
    color,
    space,
    width,
  ),
)

export const Dt = styled('dt', { shouldForwardProp })(
  {
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: '-0.03em',
  },
  compose(
    space,
    width,
    color,
    typography,
  ),
)

export const Dd = styled('dd', { shouldForwardProp })(
  {
    whiteSpace: 'nowrap',
    textTransform: 'lowercase',
    lineHeight: 1,
  },
  typography,
)

export const Suffix = styled.span({
  fontSize: '0.65em',
})
