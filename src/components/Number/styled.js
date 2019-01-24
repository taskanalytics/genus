import styled from '@emotion/styled'
import { fontSize } from 'styled-system'

import * as mixins from '../../styles/mixins'

import styleIf from '../../utils/styleIf'

const isSmall = ({ size }) => size === 'small'
const isLarge = ({ size }) => size === 'large'
const isDisplay = ({ size }) => size === 'display'

export const Dl = styled.dl({
  fontVariantNumeric: 'tabular-nums',
  fontFeatureSettings: 'tnum',
})

export const Dt = styled.dt(
  {
    ...mixins.font('bold'),
    ...mixins.fontSize('medium'),
    letterSpacing: '-0.03em',
  },
  styleIf(isDisplay, {
    ...mixins.fontSize('xxlarge'),
    marginLeft: '-2px',
  }),
  styleIf(isLarge, {
    ...mixins.fontSize('large'),
    marginLeft: '-2px',
  }),
  styleIf(isSmall, {
    ...mixins.fontSize('small'),
  }),
  fontSize
)

export const Dd = styled.dd(
  {
    ...mixins.font('normal'),
    ...mixins.fontSize('xsmall'),
    whiteSpace: 'nowrap',
    textTransform: 'lowercase',
  },
  styleIf('large', fontSize('small'))
)

export const Suffix = styled.span({
  fontSize: '0.65em',
})
