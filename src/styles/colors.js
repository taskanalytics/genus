import { lighten, darken, shade, rgba } from 'polished'

const base = '#F0F4F7'
const primary = '#2084d8'
const primaryDark = shade(.2, primary)

export const colors = {
  primary,
  primaryDark,
  base: '#F0F4F7',
  white: '#fff',
  dark: '#323C4C',
  text: '#2d3644',
  link: primary,
  linkHover: shade(.2, primaryDark),
  good: rgba(140,215,150, 1),
  goodLight: rgba(140,215,150,.25),
  headsUp: rgba(255,212,0, 1),
  headsUpLight: rgba(255,212,0,.15),
  trouble: rgba(255, 90, 20, 1),
  troubleLight: rgba(255, 90, 20, .25),
}


export function get (name) {
  return name in colors ? colors[name] : name
}

export const light = (name, mod = .25) => {
  const lightName = `${name}Light`
  return lightName in colors ? get(lightName) : lighten(mod, get(name))
}

export const dark = (name, mod = .25) => {
  const darkName = `${name}Light`
  return darkName in colors ? get(darkName) : darken(mod, get(name))
}
