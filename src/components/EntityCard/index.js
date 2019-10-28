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
    return (
      simple ||
      nextProps.actions.some((action, index) => {
        return action.name !== this.props.actions[index].name
      })
    )
  }

  render () {
    const {
      name,
      description,
      avatar,
      actions,
      children,
      ...props
    } = this.props

    const body = children || (description && <Text muted>{description}</Text>)
    return (
      <StyledCard
        width={1}
        actions={actions}
        {...props}
        data-genus='EntityCard'
      >
        {avatar && <Image width={64} height={64} mr={2} src={avatar} />}
        <StyledHeading mb={1} mr={actions ? 32 : 0}>
          {name}
        </StyledHeading>
        {body}
      </StyledCard>
    )
  }
}

EntityCard.propTypes = {
  name: T.string.isRequired,
  description: T.string,
  avatar: T.string,
  actions: T.array,
}

export default EntityCard
