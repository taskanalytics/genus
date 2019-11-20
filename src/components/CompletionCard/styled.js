import styled from '@emotion/styled'
import css from '@styled-system/css'
import { completionGradient, ellipsis } from '../../styles/mixins'
import { getPercentage } from '../../utils/calculations'
import Card from '../Card'

export const StyledCard = styled(Card)(({ completion, theme }) => {
  let styles = css({
    bg: 'primaryShaded',
    color: 'text',
    display: 'flex',
    alignItems: 'unset',
    flexDirection: 'column',
  })
  if (completion > 0) {
    styles = {
      ...styles,
      ...completionGradient(false, theme),
      backgroundPosition: `${getPercentage(completion, 100)}% center`,
    }
  }

  return styles
})
