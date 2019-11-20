import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { width, space, color, typography, compose } from 'styled-system'
import { completionGradient, ellipsis } from '../../styles/mixins'

export const StyledHeading = styled('h1', { shouldForwardProp })(
  props => {
    let css = {
      margin: 0,
    }
    if (props.ellipsis) {
      css = { ...css, ...ellipsis() }
    }
    return css
  },
  compose(
    width,
    space,
    color,
    typography,
  ),
)
