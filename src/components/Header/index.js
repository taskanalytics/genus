import React from 'react'
import T from 'prop-types'
import { Box, Flex } from '../Grid'
import Logo from '../Logo'

const Header = ({ left, right, ...props }) =>
  <Flex height={48} pl={24} pr={2} alignItems="center" {...props}
    data-genus="Header"
  >
    {!left ? <Logo /> : <Box css={{ fontSize: 0 }}>{left}</Box>}
    {right && <Box ml='auto'>{right}</Box>}
  </Flex>

Header.propTypes = {
  left: T.object,
  right: T.object,
}

export default Header
