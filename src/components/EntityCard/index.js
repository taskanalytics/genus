import React, { Component } from 'react'
import T from 'prop-types'
import isEqual from 'lodash/isEqual'
import { StyledCard, StyledBox, StyledHeading } from './styled'
import Text from '../Text'
import Avatar from '../Avatar'

class EntityCard extends Component {
  shouldComponentUpdate (nextProps) {
    const simple = ['name', 'description'].some(prop => {
      return nextProps[prop] !== this.props[prop]
    })
    return simple || nextProps.actions.some((action, index) => {
      return action.name !== this.props.actions[index].name
    })
  }

  render () {
    const {name, description, avatar, ...props} = this.props
    return (
      <StyledCard {...props}>
        {avatar && <Avatar mr={2} src={avatar} /> }
        <StyledBox>
          <StyledHeading mb={1}>{name}</StyledHeading>
          {description && <Text muted>{description}</Text>}
        </StyledBox>
      </StyledCard>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  EntityCard.propTypes = {
    name: T.string.isRequired,
    description: T.string,
    avatar: T.string,
    actions: T.array,
  }
}

export default EntityCard
