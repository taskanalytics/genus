import glamorous from 'glamorous'

import * as spacing from '../../styles/spacing'
import {radius} from '../../styles/config'
import {font, fontSize} from '../../styles/mixins'
import {colors} from '../../styles/colors'
import { width, space } from 'styled-system'

import {Box, Flex} from '../Grid'

export const Wrapper = glamorous(Flex)({
  alignItems: 'center',
  backgroundColor: colors.white,
  borderRadius: radius,
  transition: 'box-shadow .2s',
  '&:hover': {
    boxShadow: '0 2px 6px 0 rgba(0,0,0,.2)',
  }
  //padding: spacing.base,
})

export const Meta = glamorous(Box)({
  //flex: '1 1 auto',
})
