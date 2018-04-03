import glamorous from 'glamorous'

import {font, fontSize} from '../../styles/mixins'

import Heading from '../Heading'
import Text from '../Text'
import Card from '../Card'

export const StyledCard = glamorous(Card)(({theme}) => ({
  padding: theme.space[4],
  paddingBottom: theme.space[4] * 2.5,
}))

export const StyledHeading = glamorous(Heading)({
  ...font('base'),
  ...fontSize('small'),
})

export const StyledByline = glamorous(Text)(({theme}) => ({
  display: 'block',
  color: theme.colors.muted,
}))

export const StyledSource = glamorous(Text)(({theme}) => ({
  ...fontSize('xxsmall'),
  display: 'block',
  position: 'absolute',
  bottom: theme.space[4],
  color: theme.colors.muted,
}))
