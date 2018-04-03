import glamorous from 'glamorous'
import {Box} from '../Grid'

export const StyledBox = glamorous(Box)(({ theme }) => ({
  width: '64px',
  height: '64px',
  borderRadius: theme.radius,
  overflow: 'hidden',
}))
