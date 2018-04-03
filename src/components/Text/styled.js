import glamorous from 'glamorous'
import { width, space, color, textAlign } from 'styled-system'

import withIsProp from '../../utils/withIsProp'
import styleIf from '../../utils/styleIf'
import {font, fontSize} from '../../styles/mixins'

// TODO: When Genus is rolled out across all of ta-admin-react, we will have to rename mixins for fontSizes to make more sense.

const styledSmall = styleIf('small', {
  ...fontSize('xsmall'),
})

const styledLarge = styleIf('large', {
  ...fontSize('large'),
})

export const StyledText = withIsProp(glamorous('span')([
  ({ theme, muted, block }) => {
  let css = {
    ...font(),
    ...fontSize('small'),
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

  return css
},
  width,
  space,
  color,
  textAlign,
  styledSmall,
  styledLarge,
]))
