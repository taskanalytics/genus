import React from 'react'
import T from 'prop-types'
import {Flex,Box} from '../Grid'
import Logo from '../Logo'
import {StyledHeader} from './styled'

const Header = props =>
  <StyledHeader fluid align='center' px={2}>
    {props.left && <Box>{props.left}</Box>}
    {props.right && <Box ml='auto'>{props.right}</Box>}
  </StyledHeader>

Header.defaultProps = {
  left: <Logo />
}

if (process.env.NODE_ENV !== 'production') {
  Header.propTypes = {
    left: T.object,
    right: T.object,
  }
}

export default Header
