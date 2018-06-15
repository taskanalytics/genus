import glamorous from 'glamorous'

import {font} from '../../styles/mixins'

import Heading from '../Heading'
import Text from '../Text'
import Card from '../Card'

export const StyledCard = glamorous(Card)(({theme}) => ({
  padding: theme.space[4],
  paddingBottom: theme.space[4] * 2.5,
}))

export const StyledHeading = glamorous(Heading)(({ theme }) => ({
  ...font('base'),
  fontSize: theme.fontSizes[2],
}))

export const StyledByline = glamorous(Text)(({theme}) => ({
  display: 'block',
  color: theme.colors.muted,
}))

export const StyledSource = glamorous(Text)(({theme}) => ({
  fontSize: theme.fontSizes[0],
  display: 'block',
  position: 'absolute',
  bottom: theme.space[4],
  color: theme.colors.muted,
}))
