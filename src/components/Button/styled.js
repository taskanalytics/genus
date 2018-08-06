import glamorous from 'glamorous'
import { shade, rgba } from 'polished'

import {colors} from '../../styles/colors'
import {font, fontSize, spacedText} from '../../styles/mixins'

import styleIf from '../../utils/styleIf'

import {
  width,
  space,
  textAlign,
} from 'styled-system'

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

const styledDanger = styleIf('danger', {
  color: colors.trouble,
  borderColor: colors.trouble,

  '&:hover,&:focus': {
    color: colors.white,
    borderColor: colors.trouble,
    backgroundColor: colors.trouble,
  },
})

const styledCompact = styleIf('compact', {
  ...fontSize('xxsmall'),
  letterSpacing: '0.05em',
})

const styledSpaceless = styleIf('spaceless', { margin: 0 })

const styledLink = styleIf('link', {
  display: 'inline',
  cursor: 'pointer',
  textTransform: 'none',
  textDecoration: 'none',
  border: 0,
  padding: 0,
  margin: 0,
  letterSpacing: 0,
  color: colors.link,
  '&:hover,&:focus': {
    color: colors.primaryDark,
    textDecoration: 'underline',
    boxShadow: 'none',
  },
})

export default glamorous('button')(({ theme }) => ({
  ...font('bold'),
  ...fontSize('xsmall'),
  ...spacedText(),
  position: 'relative',
  display: 'inline-block',
  padding: `${theme.space[2]}px ${theme.space[4]}px`,
  color: rgba(theme.colors.text, 0.8),
  whiteSpace: 'nowrap',
  borderRadius: '50px',
  border: `2px solid ${rgba(theme.colors.black, 0.15)}`,
  backgroundColor: 'transparent',
  '[disabled]': {
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
space,
width,
textAlign,
styledSpaceless,
styledCompact,
styledLink,
styledBlock,
styledWarning,
styledPrimary,
styledInverted,
styledPrimaryInverted,
styledDanger
)
