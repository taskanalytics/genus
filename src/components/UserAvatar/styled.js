import glamorous from 'glamorous'
import {font, fontSize} from '../../styles/mixins'
import {Flex} from '../Grid'

export const Wrapper = glamorous(Flex)({
  ...font('base'),
  ...fontSize('xxsmall'),
  width: '32px',
  height: '32px',
  paddingBottom: '1px',
  borderRadius: '16px',
  overflow: 'hidden',
  color: '#fff',
  textDecoration: 'none',
}, props => {
  const styles = {
    backgroundColor: props.color,
  }
  return styles
})

export const Svg = glamorous.svg({
  marginBottom: '1px',
  fill: '#FFF',
})
