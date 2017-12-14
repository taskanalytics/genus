import glamorous from 'glamorous'
import { Text } from 'axs'
import {font, fontSize} from '../../styles/mixins'

export const StyledText = glamorous(Text)({
  ...font('normal'),
})
