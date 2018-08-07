import glamorous from 'glamorous'

import {font, fontSize} from '../../styles/mixins'

import styleIf from '../../utils/styleIf'

const isSmall = ({ size }) => size === 'small'
const isLarge = ({ size }) => size === 'large'
const isDisplay = ({ size }) => size === 'display'

export const Dl = glamorous.dl({
  fontVariantNumeric: 'tabular-nums',
  fontFeatureSettings: 'tnum',
})

export const Dt = glamorous.dt(
  {
    ...font('bold'),
    ...fontSize('medium'),
    letterSpacing: '-0.03em',
  },
  styleIf(isDisplay, {
    ...fontSize('xxlarge'),
    marginLeft: '-2px',
  }),
  styleIf(isLarge, {
    ...fontSize('large'),
    marginLeft: '-2px',
  }),
  styleIf(isSmall, {
    ...fontSize('small'),
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

export const Suffix = glamorous.span({
  fontSize: '0.65em'
})
