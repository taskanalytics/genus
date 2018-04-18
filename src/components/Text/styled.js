import glamorous from 'glamorous'
import {
  width,
  space,
  color,
  textAlign,
  lineHeight,
  letterSpacing,
} from 'styled-system'

import withIsProp from '../../utils/withIsProp'
import {font} from '../../styles/mixins'

export const StyledText = withIsProp(glamorous('span')([
  ({ theme, muted, block, small, large }) => {
  let css = {
    ...font(),
    fontSize: theme.fontSizes[2],
    display: block ? 'block' : 'inline-block',
    '& a': {
      color: theme.colors.primary,
    },
  }

  if (muted) {
    css = {
      ...css,
      color: theme.colors.muted,
      '& a': {
        color: theme.colors.primary,
      },
    }
  }

  if (small) {
    css.fontSize = theme.fontSizes[0]
  } else if (large) {
    css.fontSize = theme.fontSizes[3]
  }

  return css
},
  width,
  space,
  color,
  textAlign,
  lineHeight,
  letterSpacing,
]))
