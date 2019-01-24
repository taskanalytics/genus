import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { rgba, lighten, darken } from 'polished'
import { space } from 'styled-system'

import { Box } from '../Grid'
import { colors } from '../../styles/colors'
import * as spacing from '../../styles/spacing'
import { font, fontSize } from '../../styles/mixins'

import styleIf from '../../utils/styleIf'

import { swiftOut } from '../../styles/animations'

const progressLabel = keyframes({
  from: {
    opacity: 0,
    transform: 'scale(0) translateY(100%)',
  },
})

export const Wrapper = styled(Box)(({ color, theme, light }) =>
  {
    const css = {
      position: 'relative',
      width: '100%',
      marginTop: `${spacing.unit * 4 - 4}px`,
      borderRadius: spacing.unit,
      backgroundColor: rgba(theme.colors.primary, .2),
    }

    if (light) {
      css.color = theme.colors.text
      css.backgroundColor = rgba(theme.colors.white, 0.2)
    } else if (color) {
      css.backgroundColor = rgba(color, 0.5)
    }
    return css
  },
  space
)

export const Meter = styled('span')({
  position: 'relative',
  display: 'block',
  height: spacing.small,
  borderRadius: spacing.unit,
  transition: `max-width .5s ease-in-out`,
}, ({ width, color, light }) => ({
  maxWidth: `${width}%`,
  backgroundColor: light ? colors.white : (color || colors.base),
}))

const labelWidth = spacing.unit * 10
export const Label = styled('span')({
  position: 'absolute',
  display: 'block',
  padding: '5px',
  paddingBottom: '4px',
  color: colors.text,
  textAlign: 'center',
  top: '-38px',
  right: -((labelWidth / 2) - 2),
  width: labelWidth,
  lineHeight: '1',
  borderRadius: '50px',
  backgroundColor: 'inherit',
  zIndex: 1,

  animation: `${progressLabel} ${swiftOut} 300ms both`,
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
  },
},
styleIf('min', {
  right: -((labelWidth / 2) + (spacing.unit * 3)),
  '&::before': {
    left: spacing.unit * 3,
  },
}),
styleIf('max', {
  right: -(spacing.unit * 2 + 4),
  '&::before': {
    left: 'auto',
    right: spacing.unit * 2,
  },
})
)
