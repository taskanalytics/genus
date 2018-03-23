import glamorous from 'glamorous'
import { fontSize, ellipsis } from '../../styles/mixins'
import Heading from '../Heading'
import Card from '../Card'
import { Box } from '../Grid'

export const StyledCard = glamorous(Card)({
  alignItems: 'center',
  display: 'flex',
})

export const StyledBox = glamorous(Box)({
  width: '100%',
})

export const StyledHeading = glamorous(Heading)({
  ...fontSize('large'),
  ...ellipsis(),
})
