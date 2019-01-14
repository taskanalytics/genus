import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { font, fontSize } from '../../styles/mixins'

const border = '1px solid #CFD5DB'

const mediaQueries = {
  phone: '@media only screen and (max-width: 719px)',
  tablet: '@media screen and (min-width: 720px)',
  desktop: '@media screen and (min-width: 960px)',
}

export const StyledWrapper = styled('div')({
  overflow: 'hidden',
  display: 'inline-block',
  width: '100%',
  [mediaQueries.tablet]: {
    width: 'auto',
    borderRadius: '30px',
  },
})

export const StyledRadio = styled('input')({
  display: 'none',
})

export const StyledLabel = styled('label')(({ theme }) => ({
  ...font('bold'),
  ...fontSize('xsmall'),
  backgroundColor: '#ECEFF1',
  padding: '8px 14px',
  display: 'inline-block',
  cursor: 'pointer',
  width: '100%',
  borderBottom: border,
  '&:first-of-type': {
    borderRadius: `${theme.radius}px ${theme.radius}px 0 0`,
  },
  '&:last-child': {
    borderBottom: 'none',
    borderRadius: `0 0 ${theme.radius}px ${theme.radius}px`,
    borderRight: 'none',
  },
  [mediaQueries.tablet]: {
    width: 'auto',
    borderBottom: 'none',
    borderRight: border,
    '&:first-of-type': {
      borderRadius: '0',
      paddingLeft: theme.space[4],
    },
    '&:last-child': {
      borderRadius: '0',
      borderRight: 'none',
      paddingRight: theme.space[4],
    },
  },
  [mediaQueries.desktop]: {
    padding: `${theme.space[2]}px ${theme.space[3]}px`,
    '&:first-of-type': {
      paddingLeft: theme.space[4],
    },
    '&:last-child': {
      paddingRight: theme.space[4],
    },
  },
}), props => {
  if (props.active) {
    let styles = {}
    styles = {
      backgroundColor: colors.primary,
      color: '#fff',
    }
    if (props.destructive) {
      styles = {
        ...styles,
        backgroundColor: colors.trouble,
      }
    }
    return styles
  }
})
