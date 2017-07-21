import React, {Component} from 'react'
import {Page, ReactSpecimen} from 'catalog'
import Grid from '../../src/components/Grid'
import {colors} from '../../src/styles/colors'

export default class GridComponent extends Component {
  render () {
    const css ={ border: `1px solid ${colors.primary}` }
    return (
      <Page>
        <h2>Variations</h2>
        <ReactSpecimen>
          <Grid css={css}>Default grid</Grid>
        </ReactSpecimen>

        <ReactSpecimen>
          <Grid tight css={css}>Tight</Grid>
        </ReactSpecimen>

        <ReactSpecimen>
          <Grid wide css={css}>Wide</Grid>
        </ReactSpecimen>

        <ReactSpecimen>
          <Grid row css={css}>Row</Grid>
        </ReactSpecimen>
      </Page>
    )
  }
}
