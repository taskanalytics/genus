import styled from '@emotion/styled'

import { font } from '../../styles/mixins'

import Heading from '../Heading'
import Text from '../Text'
import Card from '../Card'

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.space[4],
  paddingBottom: theme.space[4] * 2.5,
}))

export const StyledHeading = styled(Heading)(({ theme }) => ({
  ...font('base'),
  fontSize: theme.fontSizes[2],
}))

export const StyledByline = styled(Text)(({ theme }) => ({
  display: 'block',
  color: theme.colors.muted,
}))

export const StyledSource = styled(Text)(({ theme }) => ({
  fontSize: theme.fontSizes[0],
  display: 'block',
  position: 'absolute',
  bottom: theme.space[4],
  color: theme.colors.muted,
}))
