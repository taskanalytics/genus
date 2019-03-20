import styled from '@emotion/styled'
import {
  width,
  space,
  color,
  textAlign,
  lineHeight,
  letterSpacing,
  fontWeight,
  fontSize,
  borderRadius,
} from 'styled-system'

import { font } from '../../styles/mixins'

export const StyledText = styled('span')(
  ({ theme, muted, block, small, large, nowrap, color, ...props }) => {
    let css = {
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

    if (nowrap) {
      css.whiteSpace = 'nowrap'
    }

    if (props.pill && props.href) {
      css['&:hover'] = {
        color,
        textDecoration: 'underline',
      }
    }

    return css
  },
  width,
  space,
  color,
  textAlign,
  lineHeight,
  letterSpacing,
  borderRadius,
  fontWeight,
  fontSize
)
