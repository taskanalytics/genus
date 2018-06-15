import React from 'react'

// As we have code using redux-form we need to supply a HOC to wrap
export default function withReduxForm (Wrapped) {
  return ({ input, meta, ...rest }) => {
    const { dirty, error, submitFailed } = meta
    return <Wrapped
      {...rest}
      {...input}
      error={ error && (dirty || submitFailed) ? error : null }
    />
  }
}
