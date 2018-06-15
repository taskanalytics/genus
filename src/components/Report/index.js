import React, { Component } from 'react'
import Text from '../Text'
import Percentage from '../Percentage'
import { getDelta } from '../../utils/calculations'

import { StyledCard, StyledHeading, StyledByline, StyledSource } from './styled'

export class ReportCard extends Component {
  render () {
    const { heading, value, byline, source, type, ...props } = this.props

    return (
      <StyledCard {...props}>
        <StyledHeading>{heading}</StyledHeading>
        <Percentage colored="gradient" size="display" value={value} />
        <StyledByline>{byline}</StyledByline>
        <StyledSource bottom={4}>
          {source && <strong>{source}</strong>}
          {type && ` ${type}`}
        </StyledSource>
      </StyledCard>
    )
  }
}

const Delta = ({ base, diff, size }) => {
  const delta = getDelta(base, diff)
  let prefix
  if (delta > 0) {
    prefix = '+'
  }
  return (
    <Percentage colored prefix={prefix} suffix="%" size={size} value={delta} />
  )
}

const Values = ({ values }) => {
  return values.map((value, i, values) => (
    <span>
      <Percentage colored="gradient" key={value.key} value={value} />
      {values.length - 1 === i ? null : (
        <Text muted mx="0.3em">
          vs
        </Text>
      )}
    </span>
  ))
}

export class ComparisonCard extends Component {
  render () {
    const { heading, values, source, type, empty } = this.props

    const emptyValue = <Text>{empty}</Text>
    let value

    if (empty) {
      value = emptyValue
    }

    if (values.length > 2) {
      value = <Values values={values} />
    }

    if (values.length === 2) {
      value = (
        <span>
          <Delta base={values[0]} diff={values[1]} size="display" />
          <StyledByline>
            {values[0]}% vs {values[1]}%
          </StyledByline>
        </span>
      )
    }

    return (
      <StyledCard>
        <StyledHeading>{heading}</StyledHeading>
        {value}
        <StyledSource>
          {source && <strong>{source}</strong>}
          {type && ` ${type}`}
        </StyledSource>
      </StyledCard>
    )
  }
}
