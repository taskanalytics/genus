export const xs = '400px'
export const md = '720px'
export const lg = '960px'
export const xl = '1160px'

const breakpoints = { xs, md, lg, xl }

export function mq (breakpoint, rules) {
  const breakAt = breakpoints[breakpoint]
  const mq = `@media screen and (min-width: ${breakAt})`
  return { [mq]: rules }
}
