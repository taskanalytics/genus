import React, { Component } from 'react'
import T from 'prop-types'
import {Figure, Svg, Chart, Background, Caption} from './styled'

export default class PieChart extends Component {
  static propTypes = {
    value: T.number.isRequired,
    max: T.number,
    size: T.number,
    light: T.bool,
  }

  static defaultProps = {
    light: false,
    max: 100,
    size: 48,
  }

  render () {
    const { light, value, max, size } = this.props

    const stroke = Math.min(10, Math.max(size / 5, 2))
    const radius = (size / 2) - (stroke / 2)
    const total = Math.round((2 * Math.PI) * radius)
    const percentage = (value * total) / max
    const displayVal = Math.round((value * 100) / max)
    const styles = {
      marginTop: (displayVal === 100) ? `${size / 12}px` : '',
      fontSize: (displayVal !== 100) ? `${size / 3}px` : `${size / 3.6}px`,
    }

    return (
      <Figure>
        <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <Background
            light={light}
            r={radius}
            strokeWidth={stroke}
            cx={size/2}
            cy={size/2}
          />
          <Chart
            light={light}
            r={radius}
            strokeWidth={stroke}
            cx={size/2}
            cy={size/2}
            strokeDasharray={`${percentage} ${total}`}
            opacity={value === 0 ? 0 : 1}
            strokeLinecap="round"
          />
        </Svg>
        <Caption light={light} style={styles}>
          {!isNaN(displayVal) ? displayVal : '0'}<sup>%</sup>
        </Caption>
      </Figure>
    )
  }
}
