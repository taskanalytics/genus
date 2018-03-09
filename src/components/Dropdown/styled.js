import glamorous from 'glamorous'
import {css} from 'glamor'
import theme from '../../styles/theme'
import {font, fontSize} from '../../styles/mixins'
import styleIf from '../../utils/styleIf'
import {rgba} from 'polished'
import {Box} from '../Grid'
import Popover from 'react-simple-popover'

export const StyledWrapper = glamorous(Popover)({
  maxWidth: '300px',
  minWidth: '160px',
  backgroundColor: theme.colors.white,
  borderRadius: theme.radius*2,
  padding: theme.space[1],
  boxShadow: '0 0 0 2px rgba(0,0,0,0.1)',
  transform: 'translateX(-50%)',
  '&:focus': {
    outline: 'none',
  }
})

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
