import glamorous from 'glamorous'
import {font, fontSize} from '../../styles/mixins'
import {Box} from '../Grid'

export const StyledBox = glamorous(Box)({
  ...font('base'),
  ...fontSize('xxsmall'),
  width: '32px',
  height: '32px',
  lineHeight: '32px',
  textAlign: 'center',
  borderRadius: '16px',
  display: 'inline-block',
  overflow: 'hidden',
  color: '#fff',
  textDecoration: 'none',
})
