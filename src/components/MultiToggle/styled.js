import glamorous from 'glamorous'
import {colors} from '../../styles/colors'
import theme from '../../styles/theme'
import {font, fontSize} from '../../styles/mixins'

const paddingX = 20
const paddingY = 12
const paddingExtra = 6
const border = '1px solid #CFD5DB'

const mediaQueries = {
	phone: '@media only screen and (max-width: 719px)',
  tablet: '@media screen and (min-width: 720px)',
  desktop: '@media screen and (min-width: 960px)',
}

export const StyledWrapper = glamorous.div({
  overflow: 'hidden',
  display: 'inline-block',
  width: '100%',
  [mediaQueries.tablet]: {
    width: 'auto',
    borderRadius: '30px'
  }
})

export const StyledRadio = glamorous.input({
  display: 'none',
})

export const StyledLabel = glamorous.label({
  ...font('bold'),
  ...fontSize('xsmall'),
  backgroundColor: '#ECEFF1',
  padding: '8px 14px',
  display: 'inline-block',
  cursor: 'pointer',
  '&:last-child': {
    borderRight: 'none',
  },
  width: '100%',
  borderBottom: border,
  '&:first-child': {
    borderRadius: `${theme.radius}px ${theme.radius}px 0 0`,
  },
  '&:last-child': {
    borderBottom: 'none',
    borderRadius: `0 0 ${theme.radius}px ${theme.radius}px`,
  },
  [mediaQueries.tablet]: {
    width: 'auto',
    borderBottom: 'none',
    borderRight: border,
    '&:first-child': {
      borderRadius: '0',
      paddingLeft: (14 + paddingExtra),
    },
    '&:last-child': {
      borderRadius: '0',
      borderRight: 'none',
      paddingRight: (14 + paddingExtra),
    },
  },
  [mediaQueries.desktop]: {
    padding: `${paddingY}px ${paddingX}px`,
    '&:first-child': {
      paddingLeft: (paddingX + paddingExtra),
    },
    '&:last-child': {
      paddingRight: (paddingX + paddingExtra),
    },
  }
}, props => {
  if(props.active) {
    let styles = {}
    styles = {
      backgroundColor: colors.primary,
      color: '#fff',
    }
    if(props.destructive) {
      styles = {
        ...styles,
        backgroundColor: colors.trouble,
      }
    }
    return styles
  }
})
