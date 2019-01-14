import styled from '@emotion/styled'
import { Box } from '../Grid'

export const StyledCard = styled(Box)(({ theme }) => ({
  width: '100%',
  alignItems: 'center',
  backgroundColor: theme.colors.white,
  borderRadius: theme.radius * 2,
  transition: 'box-shadow .2s',
  position: 'relative',
  '&:hover': {
    boxShadow: theme.shadows[0],
  },
}))

export const StyledMoreButton = styled('button')(({ theme, size }) => ({
  height: size,
  width: size,
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

export const StyledMoreIcon = styled('svg')(({ size }) => ({
  height: '24px',
  width: '24px',
}))
