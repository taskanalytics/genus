import StyledGrid from './styled'

export default props => {
  return (
    <StyledGrid {...props}>
      {props.children}
    </StyledGrid>
  )
}
