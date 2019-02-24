import styled from '@emotion/styled'
import { Box } from '../Grid'
import { color } from 'styled-system'

export const StyledBanner = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  fontWeight: 500,
  color: theme.colors.text,
  backgroundColor: theme.colors.primaryShaded,
  transition: 'box-shadow .2s',
  position: 'relative',
  '&:hover': {
    boxShadow: theme.shadows.neutral.small,
  },
}), color)
