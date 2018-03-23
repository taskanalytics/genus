import { Container, Flex, Box } from '.'
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
      border: '1px solid rgba(86,61,124,.2)',
    }),
    Flex: glamorous(Flex)({
      border: '1px solid rgba(86,61,124,1)',
    }),
    Box: glamorous(Box)({
      border: '1px solid rgba(86,61,124,.2)',
    }),
  },
  component: require('./README.md'),
}
