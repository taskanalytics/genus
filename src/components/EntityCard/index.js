import React, { Component } from 'react'
import T from 'prop-types'
import { StyledCard, StyledHeading } from './styled'
import { Box } from '../Grid'
import Text from '../Text'
import Image from '../Image'

class EntityCard extends Component {
  shouldComponentUpdate (nextProps) {
    const simple = ['avatar', 'name', 'description', 'children'].some(prop => {
      return nextProps[prop] !== this.props[prop]
    })
    return simple || nextProps.actions.some((action, index) => {
      return action.name !== this.props.actions[index].name
    })
  }

  render () {
    const { name, description, avatar, actions, render, children, ...props } = this.props
    const body = children || (
      description && <Text muted>{description}</Text>
    )
    const content = (
      <React.Fragment>
        {avatar && <Image width={64} height={64} mr={2} src={avatar} /> }
        <Box width={1}>
          <StyledHeading mb={1} mr={actions ? 32 : 0}>{name}</StyledHeading>
          {body}
        </Box>
      </React.Fragment>
    )
    return (
      <StyledCard width={1} actions={actions} {...props}
        data-genus="EntityCard"
      >
        { render ? render({ content }) : content }
      </StyledCard>
    )
  }
}

EntityCard.propTypes = {
  name: T.string.isRequired,
  description: T.string,
  avatar: T.string,
  actions: T.array,
  render: T.func,
}

export default EntityCard
