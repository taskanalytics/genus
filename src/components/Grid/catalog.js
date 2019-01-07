import { Container, Flex, Box } from '.'
import Heading from '../Heading'
import Text from '../Text'
import styled from '@emotion/styled'

export default {
  title: 'Grid',
  path: '/components/grid',
  imports: {
    Heading,
    Text,
    Container: styled(Container)({
      border: '1px solid rgba(86,61,124,.2)',
    }),
    Flex: styled(Flex)({
      border: '1px solid rgba(86,61,124,1)',
    }),
    Box: styled(Box)({
      border: '1px solid rgba(86,61,124,.2)',
    }),
  },
  component: require('./README.md'),
}
