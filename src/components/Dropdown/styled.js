import styled from '@emotion/styled'
import css from '@styled-system/css'
import { keyframes } from '@emotion/core'
import { rgba } from 'polished'
import {
  width,
  space,
  color,
  fontSize,
  fontWeight,
  border,
} from 'styled-system'

import { Box } from '../Grid'

export const StyledWrapper = styled('div')({
  position: 'relative',
  display: 'inline-block',
})

export const StyledDropdown = styled(Box)(
  ({ open, right }) =>
    css({
      position: 'absolute',
      minWidth: 160,
      bg: 'white',
      color: 'text',
      borderRadius: 2,
      borderWidth: 0,
      padding: 1,
      mt: 1,
      boxShadow: 'neutral.small',
      zIndex: 2,
      display: open ? 'block' : 'none',
      '&:focus': {
        outline: 'none',
      },
      [right ? 'right' : 'left']: 0,
      animation: `${keyframes({
        '0%': { opacity: 0, top: '40%' },
        '20%': { opacity: 0.2, top: '50%' },
        '40%': { opacity: 0.4, top: '70%' },
        '50%': { opacity: 0.8, top: '90%' },
        '100%': { opacity: 1, top: null },
      })} 100ms linear`,
    }),
  color,
)

export const StyledItem = styled('button')(
  ({ theme, destructive }) =>
    css({
      display: 'block',
      width: '100%',
      textAlign: 'left',
      backgroundColor: 'transparent',
      fontFamily: '"Brandon Text",sans-serif',
      fontSize: 1,
      fontWeight: 400,
      border: 'none',
      py: 1,
      px: 2,
      borderRadius: 1,
      cursor: 'pointer',
      color: destructive && theme.colors.trouble,
      '&:hover,&:focus,&:active': {
        backgroundColor: rgba(theme.colors.primary, 0.1),
      },
    }),
  space,
  fontSize,
  color,
)

export const StyledHeading = styled(Box)(
  css({
    fontWeight: 500,
    py: 1,
    px: 2,
  }),
)

export const StyledSeparator = styled('hr')(
  css({
    bg: 'muted',
    border: 0,
    mx: 1,
    height: 1,
  }),
)
