import styled from '@emotion/styled'
import css from '@styled-system/css'
import { Box, Flex } from '../Grid'

export const StyledBox = styled(Box)(
  css({
    width: '100%',
    borderRadius: 3,
    border: '2px dashed rgba(155,162,171,0.40)',
  }),
)

export const ActionItem = styled(Box)(
  css({
    mr: [0, 2],
    mt: [2, 0],
  }),
)
