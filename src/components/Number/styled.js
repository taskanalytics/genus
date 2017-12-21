import glamorous from 'glamorous'

import * as spacing from '../../styles/spacing'
import {font, fontSize} from '../../styles/mixins'

import styleIf from '../../utils/styleIf'

const isSmall = ({ size }) => size === 'small'
const isLarge = ({ size }) => size === 'large'

export const DL = glamorous('dl')({
  fontVariantNumeric: 'tabular-nums',
  fontFeatureSettings: 'tnum',
})

export const DT = glamorous('dt')(
  {
    ...font('bold'),
    letterSpacing: '-0.03em',
  },
  styleIf(isLarge, {
    ...fontSize('xlarge'),
    marginLeft: '-2px',
  })
)

export const DD = glamorous('dd')(
  {
    ...font('normal'),
    ...fontSize('xsmall'),
    whiteSpace: 'nowrap',
    textTransform: 'lowercase',
  },
  styleIf('large', fontSize('small'))
)
