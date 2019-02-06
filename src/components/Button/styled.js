import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { rgba } from 'polished'
import {
  width,
  space,
  color,
  textAlign,
} from 'styled-system'

import { colors } from '../../styles/colors'
import { font, fontSize, spacedText } from '../../styles/mixins'

import styleIf from '../../utils/styleIf'

const spin = keyframes({
  '0%,50%,to': {
    animationTimingFunction: 'cubic-bezier(.5,.5,.5,.5)',
  },
  '0%': {
    transform: 'translateX(-50%) translateY(-50%) rotate(0)',
  },
  '50%': {
    transform: 'translateX(-50%) translateY(-50%) rotate(180deg)',
  },
  to: {
    transform: 'translateX(-50%) translateY(-50%) rotate(360deg)',
  }
})

const styledBlock = styleIf('block', {
  display: 'block',
  width: '100%',
})

const styledPrimary = styleIf('primary', {
  borderColor: colors.primary,
  color: colors.primary,
  '&:hover,&:focus,&:active': {
    color: colors.white,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
})

const styledPrimaryInverted = styleIf('primaryinverted', {
  color: colors.white,
  borderColor: colors.primary,
  backgroundColor: colors.primary,

  '&:hover,&:focus,&:active': {
    backgroundColor: 'transparent',
    borderColor: colors.primary,
    color: colors.primary,
  },
})

const styledInverted = styleIf('inverted', {
  color: colors.white,
  border: `2px solid ${colors.base}`,
  backgroundColor: 'transparent',
  '&:hover,&:focus,&:active': {
    color: colors.primaryDark,
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
})

const styledWarning = styleIf('warning', {
  color: colors.headsUp,
  borderColor: colors.headsUp,

  '&:hover,&:focus': {
    color: colors.white,
    borderColor: colors.headsUp,
    backgroundColor: colors.headsUp,
  },
})

const styledDanger = ({ danger, link }) => {
  if (!danger) return null

  if (link) {
    return {
      color: colors.trouble,
      '&:hover,&:focus': {
        color: colors.trouble,
      },
    }
  }

  return {
    color: colors.trouble,
    borderColor: colors.trouble,

    '&:hover,&:focus': {
      color: colors.white,
      borderColor: colors.trouble,
      backgroundColor: colors.trouble,
    },
  }
}

const styledCompact = styleIf('compact', ({ theme }) => ({
  fontSize: theme.fontSizes[0],
  letterSpacing: 0,
  padding: `${theme.space[1]}px ${theme.space[3]}px`,
}))

const styledSpaceless = styleIf('spaceless', { margin: 0 })

const styledLink = styleIf('link', {
  display: 'inline-block',
  cursor: 'pointer',
  textTransform: 'none',
  textDecoration: 'none',
  border: 'none',
  background: null,
  padding: 0,
  margin: 0,
  letterSpacing: 0,
  '&:hover,&:focus': {
    textDecoration: 'underline',
    boxShadow: 'none',
    background: 'initial',
  },
})

const styledLoading = styleIf('loading', ({ theme: { colors: { primary, white } } }) => ({
  minHeight: '2em',
  '&:before': {
    display: 'block',
    position: 'absolute',
    content: '" "' ,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
    background: white,
    borderRadius: 50,
  },
  '&:after': {
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: '1em',
    height: '1em',
    right: 0,
    content: '" "' ,
    borderRadius: '50%',
    borderStyle: 'solid',
    borderColor: `currentColor currentColor currentColor transparent`,
    borderWidth: 6,
    animation: `${spin} 1s infinite linear`,
  },
}))

export default styled('button')(({ theme, link }) => ({
  ...font('bold'),
  ...fontSize('xsmall'),
  ...spacedText(),
  position: 'relative',
  display: 'inline-block',
  padding: `${theme.space[2]}px ${theme.space[4]}px`,
  color: link ? colors.link : rgba(theme.colors.text, 0.8),
  whiteSpace: 'nowrap',
  borderRadius: '50px',
  border: `2px solid ${rgba(theme.colors.black, 0.15)}`,
  backgroundColor: 'transparent',
  '&[disabled]': {
    pointerEvents: 'none',
    opacity: 0.6,
  },
  '&:focus': {
    outline: 'none',
  },
  '&:hover,&:focus': {
    color: theme.colors.text,
    borderColor: rgba(theme.colors.black, 0.2),
    textDecoration: 'none',
    boxShadow: theme.shadows[0],
    cursor: 'pointer',
  },
  '&:active': {
    color: theme.colors.text,
    borderColor: rgba(theme.colors.black, 0.3),
  },
}),
styledSpaceless,
styledCompact,
styledBlock,
styledWarning,
styledPrimary,
styledInverted,
styledPrimaryInverted,
styledDanger,
styledLink,
styledLoading,
space,
width,
color,
textAlign
)
