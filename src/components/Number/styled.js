import styled from '@emotion/styled'
import shouldForwardProp from '../../utils/should-forward-prop'
import css from '@styled-system/css'
import { fontSize, color, space, width, lineHeight } from 'styled-system'

export const Dl = styled.dl(
  {
    fontVariantNumeric: 'tabular-nums',
    fontFeatureSettings: 'tnum',
    margin: 0,
    padding: 0,
  },
  color,
  space,
  width,
)

export const Dt = styled('dt', { shouldForwardProp })(
  {
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: '-0.03em',
  },
  fontSize,
  lineHeight,
  space,
  width,
  color,
)

export const Dd = styled('dd', { shouldForwardProp })(
  {
    whiteSpace: 'nowrap',
    textTransform: 'lowercase',
    lineHeight: 1,
  },
  fontSize,
)

export const Suffix = styled.span({
  fontSize: '0.65em',
})
