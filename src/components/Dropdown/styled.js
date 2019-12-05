import styled from '@emotion/styled'
import css from '@styled-system/css'
import { keyframes } from '@emotion/core'
import { rgba } from 'polished'
import { space, color, fontSize, compose } from 'styled-system'

import { Box } from '../Grid'
import Button from '../Button'

export const StyledWrapper = styled(Box)(
  css({
    position: ['initial', 'relative'],
    display: 'inline-block',
  }),
)

const fadeFromTop = keyframes({
  '0%': { opacity: 0, top: '40%' },
  '20%': { opacity: 0.2, top: '50%' },
  '40%': { opacity: 0.4, top: '70%' },
  '50%': { opacity: 0.8, top: '90%' },
  '100%': { opacity: 1, top: null },
})

const fadeFromBottom = keyframes({
  '0%': { bottom: '-90%' },
  '20%': { bottom: '-70%' },
  '40%': { bottom: '-50%' },
  '50%': { bottom: '-20%' },
  '100%': { bottom: null },
})

export const StyledDropdown = styled(Box)(
  ({ theme, open, right, direction = 'bottom' }) => {
    let styles = {}
    if (direction === 'top') {
      styles = {
        mb: [0, 1],
        bottom: [0, '100%'],
        right: [0, right ? 0 : 'unset'],
        left: [0, !right ? 0 : 'unset'],
        animation: `${fadeFromBottom} 100ms linear`,
      }
    } else {
      styles = {
        mt: [0, 1],
        bottom: [0, 'unset'],
        right: [0, right ? 0 : 'unset'],
        left: [0, !right ? 0 : 'unset'],
        animation: [
          `${fadeFromBottom} 100ms linear`,
          `${fadeFromTop} 100ms linear`,
        ],
      }
    }
    return css({
      position: ['fixed', 'absolute'],
      minWidth: [1, 160],
      bg: 'white',
      color: 'text',
      borderRadius: [0, 2],
      borderWidth: 0,
      padding: 1,
      boxShadow: [`0px 20px 20px 15px ${theme.colors.muted}`, 'neutral.small'],
      zIndex: 50,
      display: open ? 'flex' : 'none',
      flexDirection: 'column',
      justifyContent: 'start',
      '&:focus': {
        outline: 'none',
      },
      maxHeight: ['60%', 'unset'],
      overflow: 'auto',
      ...styles,
    })
  },
  color,
)

export const StyledMobileClose = styled(Button)(
  css({
    display: ['block', 'none'],
    justifySelf: 'flex-start',
    alignSelf: 'flex-end',
    fontSize: 3,
    border: 'none',
    p: 0,
    m: 3,
    color: 'primary',
    '&:hover': {
      boxShadow: 'none',
      border: 'none',
    },
  }),
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
  compose(
    space,
    fontSize,
    color,
  ),
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
    m: 1,
    height: 1,
  }),
)
