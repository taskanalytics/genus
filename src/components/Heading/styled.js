import glamorous from 'glamorous'
import withIsProp from '../../utils/withIsProp'
import width from 'styled-system/dist/width'
import space from 'styled-system/dist/space'

export const StyledHeading = withIsProp(glamorous('h1')(
  [{
    //
  }],
  width,
  space,
))
