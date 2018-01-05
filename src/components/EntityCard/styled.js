import glamorous from 'glamorous'
import theme from '../../styles/theme'
import {fontSize} from '../../styles/mixins'
import Heading from '../Heading'
import {Flex} from '../Grid'
import {colors} from '../../styles/colors'
export const StyledFlex = glamorous(Flex)({
  alignItems: 'center',
  backgroundColor: theme.colors.white,
  borderRadius: theme.radius*2,
  transition: 'box-shadow .2s',
  color: colors.text,
  '&:hover': {
    boxShadow: '0 2px 6px 0 rgba(0,0,0,.2)',
  }
})

export const StyledHeading = glamorous(Heading)({
  ...fontSize('large'),
})
