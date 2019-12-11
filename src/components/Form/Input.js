import React from 'react'
import T from 'prop-types'
import {
  StyledWrapper,
  StyledInput,
  StyledLabel,
  StyledError,
  StyledValidatedMark,
  StyledClearButton,
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

const SearchClear = ({ value, onClick }) => {
  if (value && value.trim() !== '') {
    return <StyledClearButton onClick={onClick}>&times;</StyledClearButton>
  }

  return null
}

const Input = React.forwardRef((props, ref) => {
  const {
    label,
    error,
    renderAfter,
    renderError,
    value,
    onClear,
    onChange,
    ...rest
  } = props

  let afterContent = null
  if (renderAfter) {
    afterContent = (
      <span>{renderAfter({ error, value, onChange, ...rest })}</span>
    )
  } else if (onClear) {
    afterContent = <SearchClear value={value} onClick={onClear} />
  } else {
    afterContent = <ValidationMark value={value} error={error} />
  }
  return (
    <React.Fragment>
      <StyledWrapper error={error} data-genus='Input'>
        {label && <StyledLabel>{label}</StyledLabel>}
        <Flex width={1} alignItems='center'>
          <StyledInput
            onChange={onChange}
            error={error}
            value={value}
            ref={ref}
            {...rest}
          />
          {afterContent}
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
