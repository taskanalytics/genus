import glamorous from 'glamorous'
import width from 'styled-system/dist/width'
import space from 'styled-system/dist/space'
import color from 'styled-system/dist/color'
import textAlign from 'styled-system/dist/text-align'

import withIsProp from '../../utils/withIsProp'
import styleIf from '../../utils/styleIf'
import {font, fontSize} from '../../styles/mixins'
import theme from '../../styles/theme'

// TODO: When Genus is rolled out across all of ta-admin-react, we will have to rename mixins for fontSizes to make more sense.

const styledSmall = styleIf('small', {
  ...fontSize('xsmall'),
})

const styledLarge = styleIf('large', {
  ...fontSize('large'),
})

const styledMuted = styleIf('muted', {
  color: theme.colors.muted,
  '& a': {
    color: theme.colors.primary,
  },
})

export const StyledText = withIsProp(glamorous('span')([
  {
    ...font(),
    ...fontSize('small'),
    display: 'inline-block',
    '& a': {
      color: theme.colors.primary,
    },
  }],
  width,
  space,
  color,
  textAlign,
  styledSmall,
  styledLarge,
  styledMuted,
))
