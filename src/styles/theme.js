import { rgba, transparentize } from 'polished'
import { colors } from './colors'

const troubleDark = '#FF5915'
const goodDark = '#3BBE77'
const space = [ 0, 6, 12, 18, 24, 48, 96 ]

const createShadow = (spaceStep, baseColor) => (
  `0 2px ${space[spaceStep]}px 0 ${transparentize(0.4, baseColor)}`
)

const theme = {
  breakpoints: [
    '32em', '48em', '64em',
  ],
  space,
  radii: [0, 4, 8, 16, 32],
  radius: 4,
  fontSizes: [
    12, 16, 18, 24, 36, 72,
  ],
  shadows: {
    neutral: {
      small: `0 2px ${space[1]}px 0 rgba(0,0,0,.1)`,
      medium: `0 2px ${space[2]}px 0 rgba(0,0,0,.1)`,
      large: `0 2px ${space[3]}px 0 rgba(0,0,0,.1)`,
    },
    primary: {
      small: createShadow(1, colors.primary),
      medium: createShadow(2, colors.primary),
      large: createShadow(3, colors.primary),
    },
    danger: {
      small: createShadow(1, troubleDark),
      medium: createShadow(2, troubleDark),
      large: createShadow(3, troubleDark),
    },
    good: {
      small: createShadow(1, goodDark),
      medium: createShadow(2, goodDark),
      large: createShadow(3, goodDark),
    },
  },
  colors: {
    black: 'rgb(17, 17, 17)',
    blue: '#07c',
    text: 'rgb(45, 54, 68)',
    white: '#fff',
    grey: '#f5f7f9',
    muted: 'rgba(45, 54, 68, 0.6)',
    primary: colors.primary,
    primaryShaded: colors.primaryShaded,
    good: rgba(140, 215, 150, 1),
    goodDark,
    headsUp: rgba(255, 212, 0, 1),
    headsUpDark: '#FFA707',
    trouble: rgba(255, 90, 20, 1),
    troubleDark,
    validated: '#61ad0f',
  },
}

export default theme
