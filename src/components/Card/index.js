import React, { Component } from 'react'
import Dropdown from '../Dropdown'

import {
  StyledCard,
  StyledMoreButton,
  StyledMoreIcon,
} from './styled'


const MoreIcon = () =>
  <StyledMoreIcon viewBox="0 0 24 24">
    <path d="M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 Z M5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 Z"/>
  </StyledMoreIcon>

class Actions extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showActions: false
    }
  }

  render () {
    const { actions } = this.props
    const { showActions } = this.state

    return (
      <span>
        <StyledMoreButton
          innerRef={ref => this.button = ref}
          onClick={() => this.setState({showActions: !showActions})}
        >
          <MoreIcon />
          <span>Open actions</span>
        </StyledMoreButton>
        <Dropdown
          target={this.button}
          show={showActions}
          close={() => this.setState({showActions: false})}
          actions={actions} />
      </span>
    )
  }
}

class Card extends Component {
  render () {
    const { actions, children, ...props } = this.props
    return (
      <StyledCard {...props} p={3}>
        {actions && <Actions {...this.props} />}
        {children}
      </StyledCard>
    )
  }
}

export default Card
