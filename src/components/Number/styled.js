import glamorous from 'glamorous'

import * as spacing from '../../styles/spacing'
import {font, fontSize} from '../../styles/mixins'

import styleIf from '../../utils/styleIf'

const isSmall = ({ size }) => size === 'small'
const isLarge = ({ size }) => size === 'large'

export const Dl = glamorous.dl({
  fontVariantNumeric: 'tabular-nums',
  fontFeatureSettings: 'tnum',
})

export const Dt = glamorous.dt(
  {
    ...font('bold'),
    ...fontSize('large'),
    letterSpacing: '-0.03em',
  },
  styleIf(isLarge, {
    ...fontSize('xlarge'),
    marginLeft: '-2px',
  }),
  styleIf(isSmall, {
    ...fontSize('xsmall'),
  })
)

export const Dd = glamorous.dd(
  {
    ...font('normal'),
    ...fontSize('xsmall'),
    whiteSpace: 'nowrap',
    textTransform: 'lowercase',
  },
  styleIf('large', fontSize('small'))
)

export const Suffix = glamorous.span(
  {
    fontSize: '0.65em',
  }
)
