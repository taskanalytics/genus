import glamorous from 'glamorous'
import { completionGradient } from '../../styles/mixins'
import { getPercentage } from '../../utils/calculations'
import theme from '../../styles/theme'

export const StyledWrapper = glamorous('div')({
  display: 'inline-block',
}, props => {
  if (props.colored === 'gradient') {
    return {
      ...completionGradient('dark'),
      backgroundPosition: `${getPercentage(props.value, 100)}% center`,
      color: 'transparent',
      backgroundClip: 'text',
      '-webkit-background-clip': 'text',
      TextFillColor: 'transparent',
      '-webkit-text-fill-color': 'transparent',
    }
  } else if (props.colored === true) {
    if (props.value > 0) {
      return {
        color: theme.colors.goodDark,
      }
    }
    return {
      color: theme.colors.troubleDark,
    }
  }
})
