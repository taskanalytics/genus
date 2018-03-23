import glamorous from 'glamorous'
import { rgba } from 'polished'
import {css} from 'glamor'

import * as spacing from '../../styles/spacing'
import {colors} from '../../styles/colors'
import {font} from '../../styles/mixins'
import {swiftOut} from '../../styles/animations'

import styleIf from '../../utils/styleIf'

const pieFilUp = css.keyframes({
  '0%': { strokeDasharray: '0 100000' },
  '50%': { strokeDasharray: '0 100000' },
})

export const Figure = glamorous('figure')({
  position: 'relative',
  display: 'inline-block',
  verticalAlign: 'top',
  marginRight: spacing.small,
})

export const Svg = glamorous('svg')({
  animation: `fade-in 300ms ${swiftOut}`,
  transform: 'rotate(-91.00001deg)',
})

export const Background = glamorous('circle')({
  stroke: rgba(colors.primary, 0.25),
  fill: 'none',
},
styleIf('light', {
  stroke: rgba(colors.white, 0.25),
})
)

export const Chart = glamorous('circle')({
  fill: 'none',
  stroke: colors.primary,
  transition: `all 300ms ${swiftOut}`,
  animation: `${pieFilUp} ease-out 500ms both`,
}, styleIf('light', { stroke: colors.white }))

export const Caption = glamorous('figcaption')({
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
}, styleIf('light', { color: colors.white }))
