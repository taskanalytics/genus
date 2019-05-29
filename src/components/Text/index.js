import React from 'react'
import { StyledText } from './styled'

const pillMap = {
  primary: ['primary', 'white'],
  dark: ['dark', 'white'],
  danger: ['troubleDark', 'white'],
  warning: ['headsUpDark', 'white'],
  good: ['goodDark', 'white'],
  muted: ['muted', 'white'],
}

function Text ({ pill, ...props }) {
  const localProps = {}
  if (pill) {
    let bg, color
    if (typeof pill === 'string') {
      if (pill in pillMap) {
        ;[bg, color] = pillMap[pill]
      } else {
        const validKeys = Object.keys(pillMap).join(', ')
        throw new Exception(`
          <Text pill="${pill}"> is not a valid value.
          Should be one of ${validKeys} or an array of [bg, color]
        `)
      }
    } else if (Array.isArray(pill)) {
      ;[bg, color] = pill
    }

    localProps.bg = bg
    localProps.color = color
    localProps.borderRadius = 3
    localProps.lineHeight = 1
    localProps.py = 1
    localProps.px = 2
  }
  return <StyledText {...localProps} {...props} pill={pill} data-genus='Text' />
}

export default Text
