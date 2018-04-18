import theme from './theme'

export const xs = theme.breakpoints[0]
export const md = theme.breakpoints[1]
export const lg = theme.breakpoints[2]

const breakpoints = { xs, md, lg }

export function mq (breakpoint, rules) {
  const breakAt = breakpoints[breakpoint]
  const mq = `@media screen and (min-width: ${breakAt})`
  return { [mq]: rules }
}
