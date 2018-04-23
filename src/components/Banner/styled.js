import glamorous from 'glamorous'
import { Box } from '../Grid'
import { color } from 'styled-system'

export const StyledBanner = glamorous(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  fontWeight: 500,
  color: theme.colors.text,
  backgroundColor: theme.colors.primaryShaded,
  transition: 'box-shadow .2s',
  position: 'relative',
  '&:hover': {
    boxShadow: theme.shadows[0],
  },
}), color)