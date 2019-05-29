import MultiToggle from '.'
import { Box, Flex } from '../Grid'
import { options } from '../../utils/words'

export default {
  title: 'MultiToggle',
  path: '/components/MultiToggle',
  imports: {
    MultiToggle,
    Box,
    Flex,
    options,
    manyOptions: options(40, { glue: 3, destructive: [0, 1] }),
  },
  component: require('./README.md'),
}
