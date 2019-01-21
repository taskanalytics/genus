import styled from '@emotion/styled'
import Text from '../Text'
import { Flex } from '../Grid'
import { font } from '../../styles/mixins'

const BORDERSIZE = 4

export const StyledWrapper = styled('label')(({ theme, error }) => ({
  ...font(),
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

export const StyledError = styled('div')(({ theme, error }) => ({
  display: 'block',
  color: theme.colors.troubleDark,
  paddingTop: '5px',
}))

export const StyledInput = styled('input')(({ theme, error }) => {
  return {
    ...font(),
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
      opacity: 0.6,
    },
  }
})

export const StyledSelect = styled('select')(({ theme, error }) => ({
  ...font(),
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
    opacity: 0.6,
  },
}))

export const StyledAfter = styled('span')(({ theme, error }) => ({
  position: 'absolute',
  right: 0,
  bottom: 0,
  display: 'block',
}))

export const StyledCaret = styled('span')(({ theme, error }) => ({
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

export const StyledLabel = styled(Flex)(({ theme }) => ({
  letterSpacing: 2,
  justifyContent: 'space-between',
  paddingBottom: theme.space[1],
  fontSize: theme.fontSizes[0],
  color: theme.colors.muted,
  textTransform: 'uppercase',
}))

export const StyledCheckRadioLabel = styled('label')(({ theme, error, touched }) => ({
  position: 'relative',
  display: 'inline-block',
  paddingLeft: '12px',
  height: '23px',
  marginRight: '5px',
  cursor: 'pointer',
  boxSizing: 'border-box',
  fontSize: '16px',
  color: touched && error ? theme.colors.troubleDark : theme.colors.normal,
}))

export const StyledCheckRadio = styled('input')(({ theme, error }) => ({
  ...font(),
  position: 'absolute',
  boxSizing: 'border-box',
  opacity: 0,
  zIndex: -1,
  '&:checked + span': {
    backgroundColor: theme.colors.primary,
  },
}))

export const StyledCheckBoxMark = styled('span')(() => ({
  position: 'absolute',
  boxSizing: 'border-box',
  display: 'block',
  left: '5px',
  top: '1px',
  width: '7px',
  height: '14px',
  border: 'solid white',
  borderWidth: '0 2px 2px 0',
  transform: 'rotate(45deg)',
}))

export const StyledCheckBoxIndicator = styled('span')(({ theme, error, touched }) => ({
  position: 'absolute',
  boxSizing: 'border-box',
  display: 'block',
  userSelect: 'none',
  top: '-0.15em',
  left: '2px',
  width: '24px',
  height: '24px',
  borderRadius: '3px',
  backgroundColor: theme.colors.white,
  border: touched && error ? `2.5px solid ${theme.colors.troubleDark}` : `2.5px solid rgba(50, 60, 76, 0.1)`,
}))

export const StyledLabelCheckRadio = styled(Text)(({ theme }) => ({
  marginLeft: 22,
  fontSize: 16,
}))

export const StyledRadioMark = styled('span')(() => ({
  position: 'absolute',
  boxSizing: 'border-box',
  display: 'block',
  left: '5px',
  top: '6px',
  width: '8px',
  height: '8px',
  borderRadius: '8px',
  backgroundColor: 'white',
}))

export const StyledRadioIndicator = styled('span')(({ theme, error, touched }) => ({
  position: 'absolute',
  boxSizing: 'border-box',
  display: 'block',
  userSelect: 'none',
  top: '-0.15em',
  left: '2px',
  width: '24px',
  height: '24px',
  borderRadius: '20px',
  backgroundColor: theme.colors.white,
  border: touched && error ? `2.5px solid ${theme.colors.troubleDark}` : `2.5px solid rgba(50, 60, 76, 0.1)`,
}))

export const StyledValidatedMark = styled('span')(({ theme }) => ({
  width: 8,
  height: 14,
  marginRight: 10,
  border: `solid ${theme.colors.validated}`,
  borderWidth: '0 3.5px 3.5px 0',
  transform: 'rotate(45deg)',
}))
