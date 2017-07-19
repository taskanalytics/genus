import { lighten } from 'polished'

const base = '#F0F4F7'

const colors = {
  primary:  '#2084d8',
  base: '#F0F4F7',
  white: '#fff',
  dark: '#323C4C',
  text: '#2d3644',
  link: '#2084d8',
  good: 'rgba(140,215,150, 1)',
  goodLight: 'rgba(140,215,150,.25)',
  headsUp: 'rgba(255,212,0, 1)',
  headsUpLight: 'rgba(255,212,0,.15)',
  trouble: 'rgba(255, 90, 20, 1)',
  troubleLight: 'rgba(255, 90, 20, .25)',
}


export function get (name) {
  return name in colors ? colors[name] : name
}

export const light = (name, mod = .25) => {
  const lightName = `${name}Light`
  return lightName in colors ? get(lightName) : lighten(mod, get(name))
}

export default colors
