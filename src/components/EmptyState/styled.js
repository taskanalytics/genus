import styled from '@emotion/styled'
import { fontSize } from '../../styles/mixins'
import { Box } from '../Grid'
import Heading from '../Heading'

export const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: theme.radius * 3,
  border: '2px dashed rgba(155,162,171,0.40)',
}))

export const StyledHeading = styled(Heading)(({ theme }) => ({
  ...fontSize('large'),
  color: theme.colors.muted,
}))

export const StyledBody = styled(Box)(({ theme }) => ({
  color: theme.colors.muted,
}))

export const ActionsList = styled('ul')({
  listStyle: 'none',
})

export const ActionItem = styled('li')(({ theme }) => ({
  display: 'inline-block',
  marginRight: theme.space[2],
  marginTop: theme.space[1],
}))
