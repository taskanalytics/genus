import React, {Component} from 'react'
import {Page, ReactSpecimen} from 'catalog'
import Button from '../../src/components/Button'

export default class ButtonComponent extends Component {
  render () {
    return (
      <Page>
        <h2>Variations</h2>
        <ReactSpecimen span={2}>
          <Button>Default</Button>
        </ReactSpecimen>

        <ReactSpecimen span={2}>
          <Button primary>Primary</Button>
        </ReactSpecimen>

        <ReactSpecimen span={2}>
          <Button primaryinverted>Primaryinverted</Button>
        </ReactSpecimen>

        <ReactSpecimen span={2}>
          <Button warning>Warning</Button>
        </ReactSpecimen>

        <ReactSpecimen span={2}>
          <Button inverted>Inverted</Button>
        </ReactSpecimen>

        <ReactSpecimen span={2}>
          <Button block>Block</Button>
        </ReactSpecimen>

        <ReactSpecimen span={2}>
          <Button compact>Compact</Button>
        </ReactSpecimen>

        <ReactSpecimen span={2}>
          <Button disabled>Disabled</Button>
        </ReactSpecimen>

        <ReactSpecimen span={2}>
          <Button link>Link</Button>
        </ReactSpecimen>

        <ReactSpecimen span={2}>
          <Button to='/'>As a href</Button>
        </ReactSpecimen>
      </Page>
    )
  }
}
