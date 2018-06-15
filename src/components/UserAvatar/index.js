import React from 'react'
import T from 'prop-types'
import { Wrapper, Svg } from './styled'

const UserIcon = () =>
  <Svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" />
  </Svg>

const UserAvatar = ({ fullName, initials, ...rest }) =>
  <Wrapper
    justify='center'
    align='center'
    is={initials ? 'abbr' : 'span'}
    title={fullName}
    {...rest}>
    { initials || <UserIcon /> }
  </Wrapper>

UserAvatar.defaultProps = {
  bg: '#9D5EED',
}

if (process.env.NODE_ENV !== 'production') {
  UserAvatar.propTypes = {
    fullName: T.string.isRequired,
    initials: T.string.isRequired,
  }
}

export default UserAvatar
