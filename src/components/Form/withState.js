import React, { Component } from 'react'

// As we have code using redux-form we need to supply a HOC to wrap
export default function withState (Wrapped) {
  return class extends Component {
    state = { value: '' }
    onChange = ({ target: { value } }) => {
      this.setState({ value })
    }

    render () {
      return <Wrapped
        {...this.props}
        value={this.state.value}
        onChange={this.onChange}
      />
    }
  }
}
