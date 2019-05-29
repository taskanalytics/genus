import styled from '@emotion/styled'
import { completionGradient } from '../../styles/mixins'
import { getPercentage } from '../../utils/calculations'

export const StyledWrapper = styled('div')(
  {
    display: 'inline-block',
  },
  ({ colored, value, theme }) => {
    if (colored === 'gradient') {
      return {
        ...completionGradient('dark', theme),
        backgroundPosition: `${getPercentage(value, 100)}% center`,
        color: 'transparent',
        backgroundClip: 'text',
        '-webkit-background-clip': 'text',
        textFillColor: 'transparent',
        '-webkit-text-fill-color': 'transparent',
      }
    } else if (colored === true) {
      if (value > 0) {
        return {
          color: theme.colors.goodDark,
        }
      }
      return {
        color: theme.colors.troubleDark,
      }
    }
  },
)
