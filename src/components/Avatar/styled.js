import styled from '@emotion/styled'
import { Box } from '../Grid'

export const StyledBox = styled(Box)(({ theme }) => ({
  width: '64px',
  height: '64px',
  borderRadius: theme.radius,
  overflow: 'hidden',
}))
