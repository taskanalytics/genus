import {
  Input,
  PasswordInput,
  Select,
  CheckBox,
  Radio,
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
    CheckBox,
    Radio,
    Select,
    Flex,
    Box,
    Text,
  },
  component: require('./README.md'),
}
