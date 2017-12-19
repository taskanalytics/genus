import glamorous from 'glamorous'

import * as spacing from '../../styles/spacing'
import theme from '../../styles/theme'
import {font, fontSize} from '../../styles/mixins'
import {colors} from '../../styles/colors'

import {Box} from '../Grid'

export const Wrapper = glamorous(Box)({
  alignItems: 'center',
  backgroundColor: colors.white,
  borderRadius: theme.radius,
  transition: 'box-shadow .2s',
  '&:hover': {
    boxShadow: '0 2px 6px 0 rgba(0,0,0,.2)',
  }
  //padding: spacing.base,
})
