import React from 'react'
import T from 'prop-types'
import {
  StyledWrapper,
  StyledInput,
  StyledLabel,
  StyledError,
  StyledValidatedMark,
} from './styled'

import { Flex } from '../Grid'

const ValidationMark = ({ value, error }) => {
  if (error) {
    return <span>❌</span>
  }
  if (!error && value && value.trim() !== '') {
    return <StyledValidatedMark />
  }

  return null
}

const Input = React.forwardRef((props, ref) => {
  const { label, error, renderAfter, renderError, value, ...rest } = props
  return (
    <React.Fragment>
      <StyledWrapper error={error} data-genus='Input'>
        {label && <StyledLabel>{label}</StyledLabel>}
        <Flex width={1} alignItems='center'>
          <StyledInput error={error} value={value} ref={ref} {...rest} />
          {renderAfter && <span>{renderAfter({ error, value, ...rest })}</span>}
          {!renderAfter && <ValidationMark value={value} error={error} />}
        </Flex>
      </StyledWrapper>
      {error && renderError(error)}
    </React.Fragment>
  )
})

ValidationMark.propTypes = {
  value: T.string,
  error: T.oneOfType([T.string, T.bool]),
}

Input.propTypes = {
  label: T.string,
  value: T.string,
  error: T.oneOfType([T.string, T.bool]),
  placeholder: T.string,
  type: T.oneOf(['text', 'email', 'number', 'password']),
  renderAfter: T.func,
  renderError: T.func,
}

Input.defaultProps = {
  renderError: error => <StyledError children={error} />,
}

export default Input
