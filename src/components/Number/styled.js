import glamorous from 'glamorous'

import * as spacing from '../../styles/spacing'
import {font, fontSize} from '../../styles/mixins'

import styleIf from '../../utils/styleIf'

const isSmall = ({ size }) => size === 'small'
const isLarge = ({ size }) => size === 'large'

const whenSmall = styleIf(isSmall, {
  display: 'inline',
  marginRight: spacing.unit,
})

export const DL = glamorous('dl')({
  fontVariantNumeric: 'tabular-nums',
  fontFeatureSettings: 'tnum',
})

export const DT = glamorous('dt')(
  {
    ...font('bold'),
    letterSpacing: '-0.03em',
  },
  whenSmall,
  styleIf(isLarge, {
    ...fontSize('xlarge'),
    marginLeft: '-2px',
    marginBottom: spacing.unit,
  })
)

export const DD = glamorous('dd')(
  {
    ...font('normal'),
    ...fontSize('xsmall'),
    whiteSpace: 'nowrap',
    textTransform: 'lowercase',
  },
  whenSmall,
  styleIf('large', fontSize('small'))
)
