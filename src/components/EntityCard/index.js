import React, { Component } from 'react'
import T from 'prop-types'
import { StyledCard, StyledHeading } from './styled'
import { Box } from '../Grid'
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
    const { name, description, avatar, actions, render, ...props } = this.props
    const children = (
      <React.Fragment>
        {avatar && <Avatar mr={2} src={avatar} /> }
        <Box width={1}>
          <StyledHeading mb={1} mr={actions ? 32 : 0}>{name}</StyledHeading>
          {description && <Text muted>{description}</Text>}
        </Box>
      </React.Fragment>
    )
    return (
      <StyledCard width={1} actions={actions} {...props}
        data-genus="EntityCard"
      >
        { render ? render({ children }) : children }
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
    render: T.func,
  }
}

export default EntityCard
