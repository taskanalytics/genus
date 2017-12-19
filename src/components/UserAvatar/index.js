import React, { Component } from 'react'
import T from 'prop-types'
import { StyledBox } from './styled'

const UserAvatar = props =>
  <StyledBox
    {...props}
    is='abbr'
    title={props.fullName}
    css={{
      backgroundColor: props.color
    }}>
    {props.initials}
  </StyledBox>

UserAvatar.defaultProps = {
  color: '#9D5EED'
}

if (process.env.NODE_ENV !== 'production') {
  UserAvatar.propTypes = {
    fullName: T.string.isRequired,
    initials: T.string.isRequired,
    color: T.string,
  }
}

export default UserAvatar
