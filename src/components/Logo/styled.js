import glamorous from 'glamorous'
import Text from '../Text'
import {colors} from '../../styles/colors'

export const StyledLogo = glamorous(Text)({
  fontWeight: 'bold',
  color: colors.text,
})
