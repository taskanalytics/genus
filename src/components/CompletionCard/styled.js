import glamorous from 'glamorous'
import theme from '../../styles/theme'
import {completionGradient} from '../../styles/mixins'
import {fontSize} from '../../styles/mixins'
import {colors} from '../../styles/colors'
import {Box} from '../Grid'
import Heading from '../Heading'
import Text from '../Text'

export const StyledBox = glamorous(Box)({
  ...completionGradient(),
  alignItems: 'center',
  borderRadius: theme.radius*2,
  transition: 'box-shadow .2s',
  display: 'inline-block',
  width: '100%',
  color: colors.text,
  '&:hover': {
    boxShadow: '0 2px 6px 0 rgba(0,0,0,.1)',
  }
})

export const StyledHeading = glamorous(Heading)({
  ...fontSize('large'),
})

export const StyledText = glamorous(Text)({
  display: 'block',
})
