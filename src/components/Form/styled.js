import glamorous from 'glamorous'
import Text from '../Text'

export const StyledWrapper = glamorous.label(({ theme, error }) => ({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  background: 'transparent',
  borderBottom: `4px solid rgba(50,60,76,.1)`,
  borderBottomColor: error ? theme.colors.troubleDark : 'rgba(50,60,76,.1)',
  width: '100%',

  '&:after': {
    content: '""',
    display: error ? 'none' : 'block',
    position: 'absolute',
    bottom: '-4px',
    width: '0%',
    height: '4px',
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
  marginTop: theme.space[1],
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
