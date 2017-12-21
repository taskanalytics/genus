import React, { Component } from 'react'
import T from 'prop-types'
import { Wrapper, Meta } from './styled'
import Heading from '../Heading'
import Text from '../Text'
import Avatar from '../Avatar'

class EntityCard extends Component {
  render () {
    const {name, description, avatar} = this.props

    return (
      <Wrapper p={2} role="button" tabindex="0">
        <Avatar src={avatar} />
        <Meta ml={2}>
          <Heading>{name}</Heading>
          <Text>{description}</Text>
        </Meta>
      </Wrapper>
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
