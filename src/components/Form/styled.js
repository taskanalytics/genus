import React from 'react'
import glamorous from 'glamorous'
import Text from '../Text'

const BORDERSIZE = 4

export const StyledWrapper = glamorous.label(({ theme, error }) => ({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  background: 'transparent',
  borderBottom: `${BORDERSIZE}px solid rgba(50,60,76,.1)`,
  borderBottomColor: error ? theme.colors.troubleDark : 'rgba(50,60,76,.1)',
  width: '100%',

  '&:after': {
    content: '""',
    display: error ? 'none' : 'block',
    position: 'absolute',
    bottom: `-${BORDERSIZE}px`,
    width: '0%',
    height: `${BORDERSIZE}px`,
    background: theme.colors.primary,
    transition: 'width .15s ease-in-out',
  },

  '&:focus-within:after': {
    width: '100%',
  },
}))

export const StyledInput = glamorous.input(({ theme, error }) => {
  return {
    width: '100%',
    border: 'none',
    background: 'transparent',
    fontSize: theme.fontSizes[1],
    marginTop: theme.space[1],
    marginBottom: theme.space[1],

    outline: 0,
    appearance: 'none',

    '::placeholder': {
      color: theme.colors.muted,
      opacity: .6,
    },
  }
})

export const StyledSelect = glamorous.select(({ theme, error }) => ({
  width: '100%',
  border: 'none',
  background: 'transparent',
  fontSize: theme.fontSizes[1],
  transform: `translateY(${theme.space[1] + BORDERSIZE}px)`,
  paddingBottom: theme.space[1] + BORDERSIZE,
  marginBottom: theme.space[1],
  zIndex: 20,

  outline: 0,
  appearance: 'none',

  '::placeholder': {
    color: theme.colors.muted,
    opacity: .6,
  },
}))

export const StyledAfter = glamorous.span(({ theme, error }) => ({
  position: 'absolute',
  right: 0,
  bottom: 0,
  display: 'block',
}))

export const StyledCaret = glamorous.span(({ theme, error }) => ({
  display: 'block',
  width: '10px',
  height: '10px',
  marginRight: '8px',
  marginBottom: '10px',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: `transparent ${theme.colors.muted} ${theme.colors.muted} transparent`,
  borderRadius: '2px',
  transform: 'rotate(45deg)',
}))

export const StyledLabel = (props) => (
  <Text
    small muted
    letterSpacing={2}
    pb={1}
    fontSize={0}
    css={{ textTransform: 'uppercase' }}
    {...props} />
)

export const StyledCheckLabel = glamorous.label(({ theme, error }) => ({
  position: 'relative',
  display: 'inline-block',
  paddingLeft: '12px',
  height: '23px',
  marginRight: '5px',
  cursor: 'pointer',
}))

export const StyledCheckBox = glamorous.input(({ theme, error }) => ({
  position: 'absolute',
  opacity: 0,
  zIndex: -1,
  '&:checked + span': {
    backgroundColor: theme.colors.primary,
  },
}))

export const StyledCheckBoxMark = glamorous.span(() => ({
  position: 'absolute',
  display: 'block',
  left: '5px',
  top: '0px',
  width: '7px',
  height: '14px',
  border: 'solid white',
  borderWidth: '0 2px 2px 0',
  transform: 'rotate(45deg)',
}))

export const StyledCheckBoxIndicator = glamorous.span(({ theme, error }) => ({
  position: 'absolute',
  display: 'block',
  userSelect: 'none',
  top: '-0.15em',
  left: '2px',
  width: '20px',
  height: '20px',
  borderRadius: '5px',
  backgroundColor: theme.colors.white,
  border: '3px solid rgba(50, 60, 76, 0.1)',
}))
