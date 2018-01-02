import React, { Component } from 'react'
import T from 'prop-types'
import { StyledFlex, StyledHeading } from './styled'
import Text from '../Text'
import Avatar from '../Avatar'
import {Box} from '../Grid'

class EntityCard extends Component {
  render () {
    const {name, description, avatar} = this.props

    return (
      <StyledFlex p={2} role="button" tabindex="0">
        <Avatar src={avatar} />
        <Box ml={2}>
          <StyledHeading mb={1}>{name}</StyledHeading>
          <Text muted small>{description}</Text>
        </Box>
      </StyledFlex>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  EntityCard.propTypes = {
    name: T.string.isRequired,
    description: T.string,
    avatar: T.string,
  }
}

export default EntityCard
