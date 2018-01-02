import glamorous from 'glamorous'
import theme from '../../styles/theme'
import {Box} from '../Grid'

export const StyledBox = glamorous(Box)({
  width: '64px',
  height: '64px',
  borderRadius: theme.radius,
  overflow: 'hidden',
})
