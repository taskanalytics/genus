import glamorous from 'glamorous'

export const StyledWrapper = glamorous.label(({ theme, error }) => ({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'start',
  background: 'transparent',
  borderBottom: `4px solid rgba(50,60,76,.1)`,
  borderBottomColor: error ? theme.colors.troubleDark : 'rgba(50,60,76,.1)',

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
