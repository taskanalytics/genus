import styled from '@emotion/styled'
import { fontSize, color, space, width } from 'styled-system'

import * as mixins from '../../styles/mixins'

import styleIf from '../../utils/styleIf'

const isSmall = ({ size }) => size === 'small'
const isLarge = ({ size }) => size === 'large'
const isDisplay = ({ size }) => size === 'display'

export const Dl = styled.dl(
  {
    fontVariantNumeric: 'tabular-nums',
    fontFeatureSettings: 'tnum',
  },
  color,
  space,
  width
)

const sizeMap = {
  small: 0,
  large: 3,
  display: 4,
}

export const Dt = styled.dt(
  ({ theme, size }) => {
    const fsize = size ? sizeMap[size] : 1
    return {
      fontWeight: 700,
      fontSize: theme.fontSizes[fsize],
      letterSpacing: '-0.03em',
    }
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
