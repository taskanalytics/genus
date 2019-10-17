import styled from '@emotion/styled'
import css from '@styled-system/css'
import { completionGradient, ellipsis } from '../../styles/mixins'
import { getPercentage } from '../../utils/calculations'
import Card from '../Card'
import Heading from '../Heading'

export const StyledCard = styled(Card)(({ completion, theme }) => {
  let css = {
    backgroundColor: theme.colors.primaryShaded,
    color: theme.colors.text,
    display: 'flex',
    alignItems: 'unset',
    flexDirection: 'column',
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

export const StyledHeading = styled(Heading)(
  css({
    ...ellipsis(),
    fontSize: 3,
    mb: [1, 3],
  }),
)
