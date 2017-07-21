import glamorous from 'glamorous'
import { css } from 'glamor'
import { rgba, lighten } from 'polished'

import {colors} from '../../styles/colors'
import * as spacing from '../../styles/spacing'
import {font, fontSize, spacedText} from '../../styles/mixins'

import styleIf from '../../styleIf'

const swiftOut = 'cubic-bezier(0, 0, 0.1, 1)'
const progressFillUp = css.keyframes({
  from: { width: 0 }
})
const progressLabel = css.keyframes({
  from: {
    opacity: 0,
    transform: 'scale(0) translateY(100%)',
  }
})

const styledBlock = styleIf('block', {
  display: 'block',
  width: '100%',
})

export const Wrapper = glamorous.div({
  position: 'relative',
  width: '100%',
  marginTop: `${spacing.unit * 4 - 4}px`,
  borderRadius: spacing.unit,
}, ({ color }) => ({
  backgroundColor: color ? lighten(0.25, color) : colors.base,
}),
styleIf('light', {
  color: colors.text,
  backgroundColor: rgba(colors.white, 0.2),
}))

export const Meter = glamorous.span({
  position: 'relative',
  display: 'block',
  height: spacing.small,
  borderRadius: spacing.unit,
  animation: `${progressFillUp} ${swiftOut} 500ms both`,
}, ({ width, color, light }) => ({
  width: `${width}%`,
  backgroundColor: light ? colors.white : color,
}))

const labelWidth = spacing.unit * 11
export const Label = glamorous.span({
  ...font('bold'),
  ...fontSize('xsmall'),
  position: 'absolute',
  display: 'block',
  padding: spacing.unit,
  paddingBottom: spacing.unit - 3,
  color: colors.text,
  textAlign: 'center',
  top: -(spacing.unit * 6),
  right: -((labelWidth / 2) - 2),
  width: labelWidth,
  lineHeight: '1',
  borderRadius: '50px',
  backgroundColor: 'inherit',
  zIndex: 1,

  animation: `${progressLabel} $swift-out 300ms both`,
  animationDelay: '200ms',

  '&::before': {
    content: `''`,
    display: 'block',
    position: 'absolute',
    width: spacing.unit * 2,
    height: spacing.unit * 2,
    left: '50%',
    marginLeft: -spacing.unit,
    bottom: -spacing.unit,
    zIndex: -1,
    backgroundColor: 'inherit',
    transform: 'rotate(45deg)',
  }
},
styleIf('min', {
  right: -((labelWidth / 2) + (spacing.unit * 3)),
  '&::before': {
    left: spacing.unit * 3,
  }
}),
styleIf('max', {
  right: -(spacing.unit * 2 + 4),
  '&::before': {
    left: 'auto',
    right: spacing.unit * 2,
  }
})
)
