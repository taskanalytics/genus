import styled from '@emotion/styled'
import { completionGradient, ellipsis } from '../../styles/mixins'
import { getPercentage } from '../../utils/calculations'
import Card from '../Card'
import Heading from '../Heading'

export const StyledCard = styled(Card)(({ completion, theme }) => {
  let css = {
    backgroundColor: theme.colors.primaryShaded,
    display: 'inline-block',
    color: theme.colors.text,
  }
  if (completion > 0) {
    css = {
      ...css,
      ...completionGradient(false, theme),
      backgroundPosition: `${getPercentage(completion, 100)}% center`,
    }
  }

  return css
})

export const StyledHeading = styled(Heading)({
  ...ellipsis(),
})
