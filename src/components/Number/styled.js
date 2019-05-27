import styled from '@emotion/styled'
import shouldForwardProp from '../../utils/should-forward-prop'
import { fontSize, color, space, width } from 'styled-system'

import * as mixins from '../../styles/mixins'

export const Dl = styled.dl(
  {
    fontVariantNumeric: 'tabular-nums',
    fontFeatureSettings: 'tnum',
    margin: 0,
    padding: 0,
  },
  color,
  space,
  width
)

export const Dt = styled('dt', { shouldForwardProp })(
  {
    fontWeight: 700,
    letterSpacing: '-0.03em',
  },
  fontSize,
  space,
  width,
  color
)

export const Dd = styled.dd(({ size }) => ({
  ...mixins.fontSize(size === 'display' ? 'small' : 'xsmall'),
  whiteSpace: 'nowrap',
  textTransform: 'lowercase',
}))

export const Suffix = styled.span({
  fontSize: '0.65em',
})
