import React, { Component } from 'react'
import Text from '../Text'
import Percentage from '../Percentage'
import { getDelta } from '../../utils/calculations'

import {
  StyledCard,
  StyledHeading,
  StyledByline,
  StyledSource,
} from './styled'

export class ReportCard extends Component {
  render () {
    const {
      heading,
      value,
      byline,
      source,
      type,
    } = this.props

    return (
      <StyledCard>
        <StyledHeading>{heading}</StyledHeading>
        <Percentage colored='gradient' size='display' value={value} />
        <StyledByline>{byline}</StyledByline>
        <StyledSource bottom={4}>
          <strong>{source}</strong>
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
    <Percentage
      colored
      prefix={prefix}
      suffix='%'
      size={size}
      value={delta}
    />
  )
}

const Values = ({ values }) => {
  return (
    values.map((value, i, values) =>
      <span>
        <Percentage colored='gradient' key={value.key} value={value} />
        {values.length - 1 === i
          ? null
          : <Text muted mx='0.3em'>vs</Text>}
      </span>
    )
  )
}

export class ComparisonCard extends Component {
  render () {
    const {
      heading,
      values,
      source,
      type,
    } = this.props

    return (
      <StyledCard>
        <StyledHeading>{heading}</StyledHeading>
        {values.length > 2
          ? <Values values={values} />
          : <span>
            <Delta
              base={values[0]}
              diff={values[1]}
              size='display' />
            <StyledByline>
              {values[0]}% vs {values[1]}%
            </StyledByline>
          </span>
        }
        <StyledSource>
          <strong>{source}</strong>
          {type && ` ${type}`}
        </StyledSource>
      </StyledCard>
    )
  }
}
