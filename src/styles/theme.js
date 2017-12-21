import { rgba } from 'polished'

const theme = {
  breakpoints: [
    32, 48, 64 // in em's
  ],
  space: [
    0, 6, 12, 18, 24
  ],
  radius: 4,
  // fontSizes: [
  //   12, 16, 18, 24, 36, 72
  // ],
  colors: {
    black: '#111',
    blue: '#07c',
    text: '#2d3644',
    white: '#fff',
    muted: 'rgba(#2d3655, 0.7)',
    primary: '#2084d8',
    good: rgba(140, 215, 150, 1),
    headsUp: rgba(255, 212, 0, 1),
    trouble: rgba(255, 90, 20, 1),
  }
}

export default theme
