import glamorous from 'glamorous'
import { Box } from '../Grid'
import theme from '../../styles/theme'

export const StyledCard = glamorous(Box)({
  width: '100%',
  alignItems: 'center',
  backgroundColor: theme.colors.white,
  borderRadius: theme.radius*2,
  transition: 'box-shadow .2s',
  position: 'relative',
  '&:hover': {
    boxShadow: '0 2px 6px 0 rgba(0,0,0,.1)',
  },
})

export const StyledMoreButton = glamorous.button({
  height: '24px',
  width: '24px',
  border: 'none',
  backgroundColor: 'transparent',
  padding: 0,
  fill: theme.colors.muted,
  cursor: 'pointer',
  '& span': {
    display: 'none',
  },
  '&:hover': {
    fill: theme.colors.primary,
  },
  '&:active,&:focus': {
    outline: 'none',
  }
})

export const StyledMoreIcon = glamorous.svg({
  height: '24px',
  width: '24px',
})
