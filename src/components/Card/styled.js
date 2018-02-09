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
