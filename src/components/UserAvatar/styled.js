import styled from '@emotion/styled'
import { compose, fontSize, space, color } from 'styled-system'
import { font } from '../../styles/mixins'
import { Flex } from '../Grid'

export const Wrapper = styled(Flex)(
  ({ theme, large, onClick }) => {
    const size = large ? 64 : 32
    const css = {
      ...font('base'),
      fontSize: theme.fontSizes[large ? 3 : 0],
      width: size,
      height: size,
      paddingBottom: '1px',
      borderRadius: size / 2,
      overflow: 'hidden',
      color: theme.colors.white,
      textDecoration: 'none',
    }

    if (onClick) {
      css.cursor = 'pointer'
      css['&:hover'] = {
        boxShadow: theme.shadows.neutral.small,
      }
    }

    return css
  },
  compose(
    fontSize,
    space,
    color,
  ),
)

Wrapper.defaultProps = {
  size: 1,
}

export const Svg = styled('svg')({
  marginBottom: '1px',
  fill: '#FFF',
})
