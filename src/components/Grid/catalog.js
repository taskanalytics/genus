import { Grid, Flex, Row, Box } from '.'
import Heading from '../Heading'
import Text from '../Text'
import glamorous from 'glamorous'

export default {
  title: 'Grid',
  path: '/components/grid',
  imports: {
    Heading,
    Text,
    Grid: glamorous(Grid)({border: '1px solid green'}),
    Flex: glamorous(Flex)({border: '1px solid red'}),
    Row: glamorous(Row)({border: '1px solid red'}),
    Box: glamorous(Box)({border: '1px solid yellow'}),
  },
  component: require('./README.md'),
}
