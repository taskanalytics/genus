import styled from '@emotion/styled'
import { Flex } from '../Grid'
import { color } from 'styled-system'

export const StyledBanner = styled(Flex)(({ theme }) => ({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
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
