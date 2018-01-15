import glamorous from 'glamorous'
import theme from '../../styles/theme'
import { fontSize } from '../../styles/mixins'
import { colors } from '../../styles/colors'
import { Box } from '../Grid'
import Heading from '../Heading'

export const StyledBox = glamorous(Box)({
  width: '100%',
  borderRadius: theme.radius*3,
  border: '2px dashed rgba(155,162,171,0.40)',
})

export const StyledHeading = glamorous(Heading)({
  ...fontSize('large'),
  color: theme.colors.muted,
})

export const StyledBody = glamorous(Box)({
  color: theme.colors.muted,
})

export const ActionsList = glamorous.ul({
  listStyle: 'none',
})

export const ActionItem = glamorous.li({
  display: 'inline-block',
  marginRight: theme.space[2],
  marginTop: theme.space[1],
})
