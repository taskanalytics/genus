import getClassification from '../../utils/completion-rate-classification'
import {colors} from '../../styles/colors'

import {
  Wrapper,
  Meter,
  Label,
} from './styled'

export default ProgressBar = props => {
  const { min, max, value, baseline, light, empty, ...rest } = props
  const val = !isNaN(value) ?
    Math.round(value * 10) / 10 :
    0

  const colorMap = {
    success: colors.good,
    base: colors.headsUp,
    warning: colors.trouble,
  }
  const classification = getClassification(val)
  const color = !isNaN(value) ? colorMap[classification] : null

  const forwardProps = { light, color, ...rest }

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
    max: val > 95,
    min: val < 5,
  }

  return (
    <Wrapper {...forwardProps}>
      <Meter {...meterProps}>
        { !empty && color &&
          <Label {...labelProps}>
            {val}<sup>%</sup>
          </Label>
        }
      </Meter>
    </Wrapper>
  )
}

ProgressBar.defaultProps = {
  min: 0,
  max: 100,
  empty: false,
}

