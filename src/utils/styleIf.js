const testString = (prop, props) => prop in props && props[prop]
const testFn = (prop, props) => prop(props)

export default function styleIf (prop, styles) {
  const test = typeof prop === 'function' ? testFn : testString
  return props => test(prop, props) ? styles : null
}
