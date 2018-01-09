import React, { Component } from 'react'
import T from 'prop-types'
import { StyledBox } from './styled'

class AvatarComponent extends Component {
  render () {
    return (
      <StyledBox {...this.props}>
        <img src={this.props.src} />
      </StyledBox>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  AvatarComponent.propTypes = {
    src: T.string,
  }
}

export default AvatarComponent
