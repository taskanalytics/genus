import React, { Component } from 'react'

import { StyledBox, StyledContainer, StyledFlex } from './styled'

// We use classes because we need the grid components to work with refs

class Box extends Component {
  render () {
    return <StyledBox data-genus='Box' {...this.props} />
  }
}

class Flex extends Component {
  render () {
    return <StyledFlex data-genus='Flex' {...this.props} />
  }
}

class Container extends Component {
  render () {
    return <StyledContainer data-genus='Container' {...this.props} />
  }
}

export { Box, Flex, Container }
