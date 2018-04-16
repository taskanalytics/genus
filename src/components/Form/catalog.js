import {
  Input,
  PasswordInput,
  withState,
} from '.'

import { Flex, Box } from '../Grid'
import Text from '../Text'

export default {
  title: 'Form',
  path: '/components/form',
  imports: {
    Input: withState(Input),
    PasswordInput,
    Flex,
    Box,
    Text,
  },
  component: require('./README.md'),
}
