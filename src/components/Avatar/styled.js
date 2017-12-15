import glamorous from 'glamorous'
import {radius} from '../../styles/config'
import {Box} from '../Grid'

export const StyledBox = glamorous(Box)({
  width: '64px',
  height: '64px',
  borderRadius: radius,
  overflow: 'hidden',
})
