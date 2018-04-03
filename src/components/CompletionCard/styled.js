import glamorous from 'glamorous'
import { completionGradient, ellipsis } from '../../styles/mixins'
import { getPercentage } from '../../utils/calculations'
import { fontSize } from '../../styles/mixins'
import Card from '../Card'
import Heading from '../Heading'

export const StyledCard = glamorous(Card)(({ completion, theme }) => {
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

export const StyledHeading = glamorous(Heading)({
  ...fontSize('large'),
  ...ellipsis(),
})
