import React, {Component} from 'react'
import {Page, ReactSpecimen} from 'catalog'
import ProgressBar from '../../src/components/ProgressBar'

export default class ProgressBarComponent extends Component {
  render () {
    return (
      <Page>
        <h2>Variations</h2>
        <ReactSpecimen span={4}>
          <ProgressBar value={100} />
        </ReactSpecimen>
        <ReactSpecimen span={4}>
          <ProgressBar value={90} />
        </ReactSpecimen>
        <ReactSpecimen span={4}>
          <ProgressBar light value={90} />
        </ReactSpecimen>
        <ReactSpecimen span={4}>
          <ProgressBar value={65} />
        </ReactSpecimen>
        <ReactSpecimen span={4}>
          <ProgressBar value={20} />
        </ReactSpecimen>
        <ReactSpecimen span={4}>
          <ProgressBar value={0} />
        </ReactSpecimen>

      </Page>
    )
  }
}
