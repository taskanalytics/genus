import React, { Component } from 'react'
import T from 'prop-types'
import getClassification from '../../utils/completion-rate-classification'
import { colors } from '../../styles/colors'
import Percentage from '../Percentage'

import { Wrapper, Meter, Label } from './styled'

function ProgressBar ({
  min,
  max,
  value,
  light,
  empty,
  label,
  color,
  ...rest
}) {
  const valid = value !== undefined && !isNaN(value)
  const val = valid ? Math.round(value * 10) / 10 : false

  const colorMap = {
    success: colors.good,
    base: colors.headsUp,
    warning: colors.trouble,
  }
  const classification = getClassification(val)

  color = color || (valid ? colorMap[classification] : null)

  const meterProps = {
    light,
    color,
    width: val === false ? 0 : val,
    role: 'progressbar',
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuenow': val,
  }

  const props = { light, color, ...rest }

  return (
    <Wrapper {...props} data-genus='ProgressBar'>
      <Meter {...meterProps}>
        {!empty && color && (
          <Label color={color}>
            {label || <Percentage size='small' value={val} />}
          </Label>
        )}
      </Meter>
    </Wrapper>
  )
}

ProgressBar.propTypes = {
  value: T.number,
  label: T.string,
  min: T.number,
  max: T.number,
  light: T.bool,
  empty: T.bool,
  color: T.string,
}

ProgressBar.defaultProps = {
  min: 0,
  max: 100,
  empty: false,
}

export default ProgressBar
