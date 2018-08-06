import React from 'react'
import T from 'prop-types'

// As we have code using redux-form we need to supply a HOC to wrap
export default function withReduxForm (Wrapped) {
  const WrappedReduxFormComponent = ({ input, meta, ...rest }) => {
    const { dirty, error, submitFailed } = meta
    return <Wrapped
      {...rest}
      {...input}
      error={ error && (dirty || submitFailed) ? error : null }
    />
  }

  if (process.env.NODE_ENV !== 'production') {
    WrappedReduxFormComponent.propTypes = {
      input: T.object,
      meta: T.shape({
        dirty: T.bool,
        error: T.bool,
        submitFailed: T.bool,
      }),
    }
  }

  return WrappedReduxFormComponent
}
