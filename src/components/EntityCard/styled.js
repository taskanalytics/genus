import glamorous from 'glamorous'
import { ellipsis } from '../../styles/mixins'
import Heading from '../Heading'
import Card from '../Card'

export const StyledCard = glamorous(Card)({
  alignItems: 'center',
  display: 'flex',
})

export const StyledHeading = glamorous(Heading)(({ theme }) => ({
  fontSize: theme.fontSizes[3],
  ...ellipsis(),
}))
