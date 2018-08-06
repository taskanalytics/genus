import React from 'react'
import Input from './Input'
import Text from '../Text'

const SHOW = '🔓'
const HIDE = '🔒'

export default class PasswordInput extends React.Component {
  state ={ show: false }
  toggle = () => this.setState({ show: !this.state.show })

  render () {
    const { show } = this.state

    return (
      <Input
        {...this.props}
        renderAfter={ () => <Text onClick={this.toggle}>
          { show ? SHOW : HIDE }
        </Text> }
        type={show ? 'text' : 'password'}
      />
    )
  }
}
