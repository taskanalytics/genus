import glamorous from 'glamorous'
import { shade, rgba } from 'polished'

import {colors} from '../../styles/colors'
import * as spacing from '../../styles/spacing'
import {font, fontSize, spacedText} from '../../styles/mixins'

import styleIf from '../../utils/styleIf'

const styledBlock = styleIf('block', {
  display: 'block',
  width: '100%',
})

const styledPrimary = styleIf('primary', {
  borderColor: colors.primary,
  color: colors.primary,
  '&:hover,&:focus': {
    color: colors.white,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  '&:active': {
    backgroundColor: colors.primaryDark,
  },
})

const styledPrimaryInverted = styleIf('primaryinverted', {
  color: colors.white,
  borderColor: colors.primary,
  backgroundColor: colors.primary,

  '&:hover,&:focus': {
    color: colors.white,
    backgroundColor: colors.primaryDark,
    borderColor: colors.primaryDark,
  },
  '&:active': {
    backgroundColor: colors.primaryDark,
  },
})

const styledInverted = styleIf('inverted', {
  color: colors.white,
  border: `4px solid ${colors.base}`,
  backgroundColor: 'transparent',
  '&:hover,&:focus': {
    color: colors.primaryDark,
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
  '&:active': {
    backgroundColor: colors.primaryDark,
  },
})

const styledWarning = styleIf('warning', {
  color: colors.headsUp,
  borderColor: colors.headsUp,

  ':hover, :focus, :active': {
    backgroundColor: shade(0.05, colors.headsUp),
  },
  '&:hover,&:focus': {
    color: colors.white,
    borderColor: shade(0.05, colors.headsUp),
  },
})

const styledCompact = styleIf('compact', {
  ...fontSize('xsmall'),
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
  },
})

export default glamorous('button')({
  ...font('bold'),
  ...fontSize('small'),
  ...spacedText(),
  position: 'relative',
  display: 'inline-block',
  padding: `${spacing.small} ${spacing.base}`,
  color: rgba(colors.text, 0.8),
  whiteSpace: 'nowrap',
  borderRadius: '50px',
  border: `4px solid ${rgba(colors.dark, 0.15)}`,
  backgroundColor: 'transparent',
  // marginBottom: spacing.base,
  '[disabled]': {
    pointerEvents: 'none',
    opacity: 0.6,
  },
  '&:focus': {
    outline: 'none',
  },
  '&:hover,&:focus': {
    color: colors.text,
    borderColor: rgba(colors.dark, 0.2),
    textDecoration: 'none',
  },
  '&:active': {
    color: colors.text,
    borderColor: rgba(colors.dark, 0.3),
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
