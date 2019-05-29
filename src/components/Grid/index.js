import React, { Component } from 'react'

import { StyledBox, StyledContainer, StyledFlex } from './styled'

// We use classes because we need the grid components to work with refs

class Box extends Component {
  render () {
    return <StyledBox {...this.props} data-genus='Box' />
  }
}

class Flex extends Component {
  render () {
    return <StyledFlex {...this.props} data-genus='Flex' />
  }
}

class Container extends Component {
  render () {
    return <StyledContainer {...this.props} data-genus='Container' />
  }
}

export { Box, Flex, Container }
