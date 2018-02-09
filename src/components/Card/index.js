import { StyledCard } from './styled'

const Card = props =>
  <StyledCard p={3} {...props}>
    {props.children}
  </StyledCard>

export default Card
