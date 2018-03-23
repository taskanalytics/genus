import glamorous from 'glamorous'

import * as spacing from '../../styles/spacing'
import theme from '../../styles/theme'
import {font, fontSize} from '../../styles/mixins'

import {Box} from '../Grid'
import Heading from '../Heading'
import Text from '../Text'
import Card from '../Card'

const pad = theme.space[4]

export const StyledCard = glamorous(Card)({
  padding: pad,
  paddingBottom: pad*2.5,
})

export const StyledHeading = glamorous(Heading)({
  ...font('base'),
  ...fontSize('small'),
})

export const StyledByline = glamorous(Text)({
  display: 'block',
  color: theme.colors.muted,
})

export const StyledSource = glamorous(Text)({
  display: 'block',
  position: 'absolute',
  bottom: pad,
  ...fontSize('xxsmall'),
  color: theme.colors.muted,
})

export const StyledValue = glamorous(Box)({
  display: 'block',
})
