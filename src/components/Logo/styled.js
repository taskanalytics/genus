import glamorous from 'glamorous'
import Text from '../Text'
import {colors} from '../../styles/colors'
import styleIf from '../../utils/styleIf'

const medium = '30px'
const large = '60px'

const styledLarge = styleIf('large', {
  height: large,
})

const styledPrimary = styleIf('primary', {
  fill: colors.primary,
})

const styledLight = styleIf('light', {
  fill: '#FFF',
})

const styledDark = styleIf('dark', {
  fill: colors.text,
})

export const StyledLogo = glamorous.svg({
  height: medium,
  fill: colors.text,
},
styledPrimary,
styledLight,
styledDark,
styledLarge,
)
