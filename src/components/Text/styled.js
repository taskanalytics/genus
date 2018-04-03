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

const styledBlock = styleIf('block', {
  display: 'block',
})

const styledMuted = styleIf('muted', ({ theme }) => ({
  color: theme.colors.muted,
  '& a': {
    color: theme.colors.primary,
  },
}))

export const StyledText = withIsProp(glamorous('span')(({ theme }) => ({
  ...font(),
  ...fontSize('small'),
  display: 'inline-block',
  '& a': {
    color: theme.colors.primary,
  },
}),
  width,
  space,
  color,
  textAlign,
  styledSmall,
  styledLarge,
  styledMuted,
  styledBlock
))
