import styled from '@emotion/styled'
import { Flex } from '../Grid'

const border = '1px solid #CFD5DB'

const mediaQueries = {
  phone: '@media only screen and (max-width: 719px)',
  tablet: '@media screen and (min-width: 720px)',
  desktop: '@media screen and (min-width: 960px)',
}

export const StyledWrapper = styled(Flex)(({ block, direction }) => ({
  overflow: 'hidden',
  display: block ? 'flex' : 'inline-flex',
  flexDirection: direction,
  borderRadius: direction === 'row' ? 30 : 10,
  [mediaQueries.tablet]: {
    width: 'auto',
    justifyContent: block ? 'stretch' : 'initial',
  },
}))

export const StyledRadio = styled('input')({
  display: 'none',
})

export const StyledLabel = styled('label')(({ theme, block, direction }) => {
  const row = direction === 'row'
  return {
    fontWeight: 500,
    whiteSpace: 'nowrap',
    backgroundColor: '#ECEFF1',
    padding: row ? '8px 14px' : theme.space[2],
    display: block ? 'flex' : 'inline-flex',
    cursor: 'pointer',
    width: '100%',
    borderBottom: !row && border,
    textAlign: row && 'center',
    [mediaQueries.tablet]: {
      width: block && '100%',
      borderBottom: row && 'none',
      borderRight: border,
      '&:first-of-type': {
        borderRadius: '0',
        paddingLeft: row && theme.space[4],
      },
      '&:last-child': {
        borderRadius: '0',
        borderRight: 'none',
        paddingRight: row && theme.space[4],
      },
    },
    [mediaQueries.desktop]: {
      padding: `${theme.space[2]}px ${theme.space[3]}px`,
      '&:first-of-type': {
        paddingLeft: row && theme.space[4],
      },
      '&:last-child': {
        paddingRight: row && theme.space[4],
      },
    },
  }
}, ({ active, theme, destructive }) => {
  let styles = {}
    if (active) {
      styles.color = theme.colors.white,
      styles.backgroundColor = destructive
          ? theme.colors.trouble
          : theme.colors.primary
    }
    else {
      styles['&:hover'] = {
        background: (
          destructive
            ? theme.colors.troubleDark
            : theme.colors.primaryShaded
        ),
        color: theme.colors.white,
      }
    }
    return styles
  }
)
