export default function withIsProp (Component) {
  return ({ is, ...props }) => {
    const Resolved = is ? Component.withComponent(is) : Component
    return <Resolved {...props} />
  }
}
