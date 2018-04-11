import { rgba } from 'polished'
import { colors } from './colors'

const theme = {
  breakpoints: [
    32, 48, 64, // in em's
  ],
  space: [
    0, 6, 12, 18, 24,
  ],
  radius: 4,
  // fontSizes: [
  //   12, 16, 18, 24, 36, 72
  // ],
  shadows: [
    '0 2px 6px 0 rgba(0,0,0,.1)',
    '0 2px 12px 0 rgba(0,0,0,.1)',
  ],
  colors: {
    black: 'rgb(17, 17, 17)',
    blue: '#07c',
    text: 'rgb(45, 54, 68)',
    white: '#fff',
    muted: 'rgba(45, 54, 68, 0.6)',
    primary: colors.primary,
    primaryShaded: colors.primaryShaded,
    good: rgba(140, 215, 150, 1),
    goodDark: '#3BBE77',
    headsUp: rgba(255, 212, 0, 1),
    headsUpDark: '#FFA707',
    trouble: rgba(255, 90, 20, 1),
    troubleDark: '#FF5915',
  },
}

export default theme
