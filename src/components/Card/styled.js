import styled from '@emotion/styled'
import { Box } from '../Grid'

export const StyledCard = styled(Box)(({ theme, shadow, boxShadow }) => ({
  alignItems: 'center',
  borderRadius: theme.radius * 2,
  transition: 'box-shadow .2s',
  position: 'relative',
  minWidth: '100%',
  '&:hover': {
    boxShadow: boxShadow || theme.shadows[shadow || 'neutral'].small,
  },
}))

export const StyledMoreButton = styled('button')(({ theme }) => ({
  height: 32,
  width: 32,
  border: 'none',
  backgroundColor: 'transparent',
  padding: 0,
  fill: theme.colors.muted,
  cursor: 'pointer',
  '& span': {
    display: 'none',
  },
  '&:hover': {
    fill: theme.colors.primary,
  },
  '&:active,&:focus': {
    outline: 'none',
  },
}))
