import { Container, Flex, Row, Box } from '.'
import Heading from '../Heading'
import Text from '../Text'
import glamorous from 'glamorous'

export default {
  title: 'Grid',
  path: '/components/grid',
  imports: {
    Heading,
    Text,
    Container: glamorous(Container)({
      //background: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.2)',
    }),
    Flex: glamorous(Flex)({
      border: '1px solid red'
    }),
    Row: glamorous(Row)({
      border: '1px solid red'
    }),
    Box: glamorous(Box)({
      //background: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.2)',
    }),
  },
  component: require('./README.md'),
}
