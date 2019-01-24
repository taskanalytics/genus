import React, { Component } from 'react'
import T from 'prop-types'
import getClassification from '../../utils/completion-rate-classification'
import { colors } from '../../styles/colors'
import Percentage from '../Percentage'

import {
  Wrapper,
  Meter,
  Label,
} from './styled'

class ProgressBar extends Component {
  static propTypes = {
    value: T.number,
    min: T.number,
    max: T.number,
    light: T.bool,
    empty: T.bool,
    color: T.string,
  }

  static defaultProps = {
    min: 0,
    max: 100,
    empty: false,
  }

  render () {
    const { min, max, value, light, empty, ...rest } = this.props
    const val = !isNaN(value)
      ? Math.round(value * 10) / 10
      : 0

    const colorMap = {
      success: colors.good,
      base: colors.headsUp,
      warning: colors.trouble,
    }
    const classification = getClassification(val)

    const color = this.props.color || (!isNaN(value) ? colorMap[classification] : null)

    const props = { light, color, ...rest }

    const meterProps = {
      light,
      color,
      width: val,
      role: 'progressbar',
      'aria-valuemin': min,
      'aria-valuemax': max,
      'aria-valuenow': value,
    }
    const labelProps = {
      color,
      max: val > 95 ? true : undefined,
      min: val < 5 ? true : undefined,
    }

    return (
      <Wrapper {...props} data-genus="ProgressBar">
        <Meter {...meterProps}>
          { !empty && color &&
            <Label {...labelProps}>
              <Percentage size="small" value={val} />
            </Label>
          }
        </Meter>
      </Wrapper>
    )
  }
}

export default ProgressBar
