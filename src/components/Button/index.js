import StyledButton from './styled'
const StyledLink = StyledButton.withComponent('a')

export default props => {
  const {
    children,
    to,
    ...rest
  } = props

  if (to) {
    return (
      <StyledLink {...rest} href={to}>
        {children}
      </StyledLink>
    )
  }

  return (<StyledButton {...rest}>
    {children}
  </StyledButton>)
}
