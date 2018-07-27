import React from 'react'
import T from 'prop-types'
import {Box} from '../Grid'
import Logo from '../Logo'
import {StyledHeader} from './styled'

const Header = ({ left, right, ...props }) =>
  <StyledHeader pl={24} pr={2} alignItems="center" {...props}>
    {!left ? <Logo /> : <Box css={{fontSize: 0}}>{left}</Box>}
    {right && <Box ml='auto'>{right}</Box>}
  </StyledHeader>

if (process.env.NODE_ENV !== 'production') {
  Header.propTypes = {
    left: T.object,
    right: T.object,
  }
}

export default Header
