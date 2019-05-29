import React, { Component } from 'react'
import T from 'prop-types'
import { Figure, Svg, Chart, Background, Caption, Sup } from './styled'

class PieChart extends Component {
  static defaultProps = {
    light: false,
    max: 100,
    size: 48,
  }

  render () {
    const { light, value, max, size } = this.props

    const stroke = Math.min(6, Math.max(size / 5, 2))
    const radius = size / 2 - stroke / 2
    const total = Math.round(2 * Math.PI * radius)
    const percentage = (value * total) / max
    const displayVal = Math.round((value * 100) / max)
    const validValue = !isNaN(displayVal)

    return (
      <Figure data-genus='PieChart'>
        <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <Background
            light={light}
            r={radius}
            strokeWidth={stroke}
            cx={size / 2}
            cy={size / 2}
          />
          <Chart
            light={light}
            r={radius}
            strokeWidth={stroke}
            cx={size / 2}
            cy={size / 2}
            strokeDasharray={`${percentage} ${total}`}
            opacity={value > 0 ? 1 : 0}
            strokeLinecap='round'
          />
        </Svg>
        <Caption
          color={light ? 'white' : null}
          mt={displayVal === 100 ? `${size / 12 - 1}px` : null}
          fontSize={displayVal !== 100 ? size / 3.2 : size / 3.6}
        >
          {validValue ? displayVal : 'N/A'}
          {validValue && <Sup>%</Sup>}
        </Caption>
      </Figure>
    )
  }
}

PieChart.propTypes = {
  value: T.number.isRequired,
  max: T.number,
  size: T.number,
  light: T.bool,
}

export default PieChart
