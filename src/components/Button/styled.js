import glamorous from 'glamorous'
import { rgba, shade } from 'polished'

import {colors, dark} from '../../styles/colors'
import spacing from '../../styles/spacing'
import {font, fontSize, spacedText} from '../../styles/mixins'

const whenTruthy = (prop, styles) => {
  return props => prop in props && props[prop] ? styles : null
}

const styledBlock = whenTruthy('block', {
  display: 'block',
  width: '100%',
})

const styledPrimary = whenTruthy('primary', {
  borderColor: colors.primary,
  color: colors.primary,
  ':hover, :focus': {
    color: colors.white,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  ':active': {
    backgroundColor: colors.primaryDark,
  },
})

const styledPrimaryInverted = whenTruthy('primaryinverted', {
  color: colors.white,
  borderColor: colors.primary,
  backgroundColor: colors.primary,

  ':hover, :focus': {
    color: colors.white,
    backgroundColor: colors.primaryDark,
    borderColor: colors.primaryDark,
  },
  ':active': {
    backgroundColor: colors.primaryDark,
  }
})

const styledInverted = whenTruthy('inverted', {
  color: colors.white,
  border: `4px solid ${colors.base}`,
  backgroundColor: 'transparent',
  ':hover, :focus': {
    color: colors.primaryDark,
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
  ':active': {
    backgroundColor: colors.primaryDark,
  },
})

const styledWarning = whenTruthy('warning', {
  color: colors.headsUp,
  borderColor: colors.headsUp,

  ':hover, :focus, :active': {
    backgroundColor: shade(.05, colors.headsUp),
  },
  ':hover, :focus': {
    color: colors.white,
    borderColor: shade(.05, colors.headsUp),
  },
})

const styledCompact = whenTruthy('compact', {
  ...fontSize('xsmall'),
  letterSpacing: '0.05em',
})

const styledSpaceless = whenTruthy('spaceless', { margin: 0 })

const styledLink = whenTruthy('link', {
  display: 'inline',
  cursor: 'pointer',
  textTransform: 'none',
  textDecoration: 'none',
  border: 0,
  padding: 0,
  margin: 0,
  letterSpacing: 0,
  color: colors.link,
  ':hover, :focus': {
    color: colors.primaryDark,
    textDecoration: 'underline',
  }
})

export default glamorous.button({
  ...font('bold'),
  ...fontSize('small'),
  ...spacedText(),
  position: 'relative',
  display: 'inline-block',
  padding: `${spacing.small} ${spacing.base}`,

  color: rgba(colors.text, .8),
  whiteSpace: 'nowrap',

  borderRadius: '50px',
  border: `4px solid ${rgba(colors.dark, .15)}`,
  backgroundColor: 'transparent',
  marginBottom: spacing.base,

  '[disabled]': {
    pointerEvents: 'none',
    opacity: .6,
  },

  ':hover, :focus': {
    color: colors.text,
    borderColor: rgba(colors.dark, .2),
    textDecoration: 'none',
  },
  ':active': {
    color: colors.text,
    borderColor: rgba(colors.dark, .3),
  },
},
  styledSpaceless,
  styledCompact,
  styledLink,
  styledBlock,
  styledWarning,
  styledPrimary,
  styledInverted,
  styledPrimaryInverted
)
