import { shade, rgba } from 'polished'

const base = '#F0F4F7'
const primary = '#2084d8'
const primaryDark = shade(0.2, primary)

export const colors = {
  primary,
  primaryDark,
  base,
  white: '#fff',
  dark: '#323C4C',
  text: '#2d3644',
  link: primary,
  linkHover: shade(0.2, primaryDark),
  good: rgba(140, 215, 150, 1),
  goodLight: rgba(140, 215, 150, 0.25),
  headsUp: rgba(255, 212, 0, 1),
  headsUpLight: rgba(255, 212, 0, 0.15),
  trouble: rgba(255, 90, 20, 1),
  troubleLight: rgba(255, 90, 20, 0.25),
}

export function get (name) {
  return name in colors ? colors[name] : name
}
