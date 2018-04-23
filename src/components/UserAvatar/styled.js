import glamorous from 'glamorous'
import { fontSize, space, color } from 'styled-system'
import {font} from '../../styles/mixins'
import {Flex} from '../Grid'

export const Wrapper = glamorous(Flex)(({ theme, large }) => {
  const size = large ? 64 : 32
  return {
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
},
  fontSize,
  space,
  color
)

Wrapper.defaultProps = {
  size: 1,
}

export const Svg = glamorous.svg({
  marginBottom: '1px',
  fill: '#FFF',
})
