import glamorous from 'glamorous'
import {css} from 'glamor'
import {rgba} from 'polished'
import { width, space } from 'styled-system'

import theme from '../../styles/theme'
import {font, fontSize} from '../../styles/mixins'
import styleIf from '../../utils/styleIf'

import {Box} from '../Grid'

export const StyledWrapper = glamorous('span')({
  position: 'relative',
})

export const StyledDropdown = glamorous('dialog')({
  maxWidth: '300px',
  minWidth: '160px',
  backgroundColor: theme.colors.white,
  borderRadius: theme.radius * 2,
  borderWidth: 0,
  padding: theme.space[1],
  boxShadow: '0 0 0 2px rgba(0,0,0,0.1)',
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
},
(props) => {
  if (props.right) {
    return {
      transform: 'translateX(-100%)',
      left: '100%',
    }
  }
},
width,
space
)

const styledDestructive = styleIf('destructive', {
  color: theme.colors.trouble,
})

export const StyledAction = glamorous(Box)({
  ...font('normal'),
  backgroundColor: 'transparent',
  padding: theme.space[1],
  paddingLeft: theme.space[2],
  paddingRight: theme.space[2],
  borderRadius: theme.radius,
  color: theme.colors.primary,
  cursor: 'pointer',
  '&:hover,&:focus,&:active': {
    backgroundColor: rgba(theme.colors.primary, 0.1),
  },
},
styledDestructive
)

export const StyledHeading = glamorous(Box)({
  ...font('bold'),
  padding: theme.space[1],
  paddingLeft: theme.space[2],
  paddingRight: theme.space[2],
})

export const StyledSeparator = glamorous(Box)({
  backgroundColor: '#D5D7DA',
  margin: `${theme.space[1]}px 0`,
  display: 'block',
  height: '1px',
  width: '100%',
})
