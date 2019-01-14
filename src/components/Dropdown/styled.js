import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { rgba } from 'polished'
import { width, space } from 'styled-system'

import { font } from '../../styles/mixins'
import { Box } from '../Grid'

export const StyledWrapper = styled('div')({
  position: 'relative',
  display: 'inline-block',
})

export const StyledDropdown = styled('div')(({ theme, open }) => ({
  position: 'absolute',
  minWidth: '160px',
  backgroundColor: theme.colors.white,
  borderRadius: theme.radius * 2,
  borderWidth: 0,
  padding: theme.space[1],
  boxShadow: '0 0 0 2px rgba(0,0,0,0.1)',
  zIndex: 2,
  display: open ? 'block' : 'none',
  '&:focus': {
    outline: 'none',
  },
  animation: `${keyframes({
    '0%': { opacity: 0 },
    '20%': { opacity: 0.2 },
    '40%': { opacity: 0.4 },
    '50%': { opacity: 0.8 },
    '100%': { opacity: 1 },
  })} 150ms linear`,
}),
(props) => {
  if (props.right) {
    return { right: 0 }
  }
  return { left: 0 }
},
width,
space
)

export const StyledItem = styled(Box)(({ theme, destructive }) => ({
  ...font('normal'),
  backgroundColor: 'transparent',
  padding: theme.space[1],
  paddingLeft: theme.space[2],
  paddingRight: theme.space[2],
  borderRadius: theme.radius,
  cursor: 'pointer',
  color: destructive ? theme.colors.trouble : null,
  '&:hover,&:focus,&:active': {
    backgroundColor: rgba(theme.colors.primary, 0.1),
  },
}))

export const StyledHeading = styled(Box)(({ theme }) => ({
  ...font('bold'),
  padding: theme.space[1],
  paddingLeft: theme.space[2],
  paddingRight: theme.space[2],
}))

export const StyledSeparator = styled(Box)(({ theme }) => ({
  backgroundColor: '#D5D7DA',
  margin: `${theme.space[1]}px 0`,
  display: 'block',
  height: '1px',
  width: '100%',
}))
