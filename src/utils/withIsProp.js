import React from 'react'
import T from 'prop-types'

export default function withIsProp (Component) {
  const WithIsProp = ({ is, ...props }) => {
    const Resolved = is ? Component.withComponent(is) : Component
    return <Resolved {...props} />
  }

  if (process.env.NODE_ENV !== 'production') {
    WithIsProp.propTypes = {
      is: T.string,
    }
  }

  return WithIsProp
}
