import glamorous from 'glamorous'
import { fontSize } from '../../styles/mixins'
import { Box } from '../Grid'
import Heading from '../Heading'

export const StyledBox = glamorous(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: theme.radius * 3,
  border: '2px dashed rgba(155,162,171,0.40)',
}))

export const StyledHeading = glamorous(Heading)(({ theme }) => ({
  ...fontSize('large'),
  color: theme.colors.muted,
}))

export const StyledBody = glamorous(Box)(({ theme }) => ({
  color: theme.colors.muted,
}))

export const ActionsList = glamorous.ul({
  listStyle: 'none',
})

export const ActionItem = glamorous.li(({ theme }) => ({
  display: 'inline-block',
  marginRight: theme.space[2],
  marginTop: theme.space[1],
}))
