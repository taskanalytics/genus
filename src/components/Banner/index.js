import React, { Component } from 'react'

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

export default Banner
