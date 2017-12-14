import glamorous from 'glamorous'

import * as spacing from '../../styles/spacing'
import {radius} from '../../styles/config'
import {font, fontSize} from '../../styles/mixins'
import {colors} from '../../styles/colors'
import {Box} from '../Grid'

import Heading from '../Heading'
import Text from '../Text'

export const Wrapper = glamorous(Box)({
  backgroundColor: colors.white,
  borderRadius: radius,
  padding: spacing.base,
  transition: 'box-shadow .2s',
  '&:hover,&:focus,&:active': {
    boxShadow: '0 2px 6px 0 rgba(0,0,0,.5)'
  },
})

export const StyledHeading = glamorous(Heading)({
  ...fontSize('medium'),
  color: colors.primary,
})

export const StyledText = glamorous(Text)({
  marginBottom: spacing.base,
  color: colors.muted,
})
