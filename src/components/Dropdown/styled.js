import glamorous from 'glamorous'
import {css} from 'glamor'
import {rgba} from 'polished'
import { width, space } from 'styled-system'

import {font, fontSize} from '../../styles/mixins'
import {Box} from '../Grid'

export const StyledWrapper = glamorous('span')({
  position: 'relative',
  zIndex: 1,
})

export const StyledDropdown = glamorous('div')(({ theme, open }) => ({
  position: 'absolute',
  maxWidth: '300px',
  minWidth: '160px',
  backgroundColor: theme.colors.white,
  borderRadius: theme.radius * 2,
  borderWidth: 0,
  padding: theme.space[1],
  boxShadow: '0 0 0 2px rgba(0,0,0,0.1)',
  zIndex: 2,
  display: open ? 'block' : 'none',
  left: null,
  right: null,
  '&:focus': {
    outline: 'none',
  },
  animation: `${css.keyframes({
    '0%': { opacity: 0 },
    '20%': { opacity: 0.2},
    '40%': { opacity: 0.4 },
    '50%': { opacity: 0.8 },
    '100%': { opacity: 1 },
  })} 150ms linear`,
}),
(props) => {
  if (props.right) {
    return {
      transform: 'translateX(-100%)',
      marginLeft: '100%',
    }
  }
},
width,
space
)

export const StyledItem = glamorous(Box)(({ theme }) => ({
  ...font('normal'),
  backgroundColor: 'transparent',
  padding: theme.space[1],
  paddingLeft: theme.space[2],
  paddingRight: theme.space[2],
  borderRadius: theme.radius,
  cursor: 'pointer',
  '&:hover,&:focus,&:active': {
    backgroundColor: rgba(theme.colors.primary, 0.1),
  },
}))

export const StyledAction = glamorous(StyledItem)(({ theme, destructive }) => ({
  color: destructive ? theme.colors.trouble : theme.colors.primary,
}))

export const StyledHeading = glamorous(Box)(({ theme }) => ({
  ...font('bold'),
  padding: theme.space[1],
  paddingLeft: theme.space[2],
  paddingRight: theme.space[2],
}))

export const StyledSeparator = glamorous(Box)(({ theme }) => ({
  backgroundColor: '#D5D7DA',
  margin: `${theme.space[1]}px 0`,
  display: 'block',
  height: '1px',
  width: '100%',
}))
