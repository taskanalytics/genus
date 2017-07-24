export default function styleIf (prop, styles) {
  return props => prop in props && props[prop] ? styles : null
}
