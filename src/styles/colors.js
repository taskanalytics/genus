const base = '#F0F4F7'
const primary = '#2084d8'
const primaryDark = '#1969ac' // shade(0.2, primary)
const primaryShaded = '#8fc1eb' // tint(0.5, primary)
const text = '#2d3644'

export const colors = {
  primary,
  primaryDark,
  primaryShaded,
  base,
  white: '#fff',
  dark: '#323C4C',
  text,
  muted: 'rgba(45,54,68,0.7)', // rgba(text), 0.7)
  link: primary,
  linkHover: '#145489', // shade(0.2, primaryDark)
  good: 'rgba(140, 215, 150, 1)',
  goodLight: 'rgba(140, 215, 150, 0.25)',
  headsUp: 'rgba(255, 212, 0, 1)',
  headsUpLight: 'rgba(255, 212, 0, 0.15)',
  trouble: 'rgba(255, 90, 20, 1)',
  troubleLight: 'rgba(255, 90, 20, 0.25)',
}

export function get (name) {
  return name in colors ? colors[name] : name
}
