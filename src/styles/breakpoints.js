const breakpoints = {
    xs: '400px',
    md: '720px',
    lg: '960px',
    xl: '1160px',
}
export default breakpoints

export function mq (breakpoint, rules) {
  const breakAt = breakpoints[breakpoint]
  const mq = `@media screen and (min-width: ${breakAt})`
  return { [mq]: rules }
}
