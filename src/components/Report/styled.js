import glamorous from 'glamorous'

import * as spacing from '../../styles/spacing'
import theme from '../../styles/theme'
import {font, fontSize} from '../../styles/mixins'
import {colors} from '../../styles/colors'

import {Box} from '../Grid'
import Heading from '../Heading'
import Text from '../Text'

export const StyledBox = glamorous(Box)({
  alignItems: 'center',
  backgroundColor: colors.white,
  borderRadius: theme.radius*2,
  transition: 'box-shadow .2s',
  '&:hover': {
    boxShadow: '0 2px 6px 0 rgba(0,0,0,.2)',
  }
})

export const StyledHeading = glamorous(Heading)({
  ...font('base'),
  ...fontSize('medium'),
})

export const StyledText = glamorous(Text)({
  marginBottom: spacing.base,
  color: colors.muted,
})
