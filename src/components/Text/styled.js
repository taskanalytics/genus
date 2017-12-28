import glamorous from 'glamorous'
import width from 'styled-system/dist/width'
import space from 'styled-system/dist/space'
import textAlign from 'styled-system/dist/text-align'

import styleIf from '../../utils/styleIf'
import {font, fontSize} from '../../styles/mixins'

// TODO: When Genus is rolled out across all of ta-admin-react, we will have to rename mixins for fontSizes to make more sense.

const styledSmall = styleIf('small', {
  ...fontSize('xsmall'),
})

const styledLarge = styleIf('large', {
  ...fontSize('large'),
})

export const StyledText = glamorous.span([
  {
    ...font(),
    ...fontSize('small'),
    display: 'inline-block',
  }],
  width,
  space,
  textAlign,
  styledSmall,
  styledLarge,
)
