import styled from '@emotion/styled'
import { rgba } from 'polished'
import { keyframes } from '@emotion/core'
import { space, fontSize, color } from 'styled-system'

import * as spacing from '../../styles/spacing'
import { colors } from '../../styles/colors'
import { font } from '../../styles/mixins'
import { swiftOut } from '../../styles/animations'

import styleIf from '../../utils/styleIf'

const pieFilUp = keyframes({
  '0%': { strokeDasharray: '0 100000' },
  '50%': { strokeDasharray: '0 100000' },
})

export const Figure = styled('figure')({
  position: 'relative',
  display: 'inline-block',
  verticalAlign: 'top',
  marginRight: spacing.small,
})

export const Svg = styled('svg')({
  animation: `fade-in 300ms ${swiftOut}`,
  transform: 'rotate(-91.00001deg)',
})

export const Background = styled('circle')({
  stroke: rgba(colors.primary, 0.25),
  fill: 'none',
},
styleIf('light', {
  stroke: rgba(colors.white, 0.25),
})
)

export const Chart = styled('circle')({
  fill: 'none',
  stroke: colors.primary,
  transition: `all 300ms ${swiftOut}`,
  animation: `${pieFilUp} ease-out 500ms both`,
}, styleIf('light', { stroke: colors.white }))

export const Caption = styled('figcaption')({
  ...font('bold'),
  position: 'absolute',
  top: '1px',
  left: 0,
  width: '100%',
  height: '100%',
  paddingTop: '1em',
  lineHeight: 1,
  textAlign: 'center',
  fontSize: '1em',
  fontVariantNumeric: 'tabular-nums',
  fontFeatureSettings: 'tnum',
  letterSpacing: '-0.05em',
},
  fontSize,
  space,
  color
)

export const Sup = styled('sup')({ verticalAlign: 'unset' })
