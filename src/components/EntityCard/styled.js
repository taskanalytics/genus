import styled from '@emotion/styled'
import { ellipsis } from '../../styles/mixins'
import Heading from '../Heading'
import Card from '../Card'

export const StyledCard = styled(Card)({
  alignItems: 'center',
  display: 'flex',
})

export const StyledHeading = styled(Heading)(({ theme }) => ({
  fontSize: theme.fontSizes[3],
  ...ellipsis(),
}))
