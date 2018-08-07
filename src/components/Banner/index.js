import React, { Component } from 'react'
import T from 'prop-types'

import {
  StyledBanner,
} from './styled'

class Banner extends Component {
  render () {
    const { children, ...props } = this.props
    return (
      <StyledBanner py={2} {...props}>
        {children}
      </StyledBanner>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  Banner.propTypes = {
    children: T.node,
  }
}

export default Banner
