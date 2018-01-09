import React, { PureComponent } from 'react'
import T from 'prop-types'
import { StyledFlex, StyledHeading } from './styled'
import Text from '../Text'
import Avatar from '../Avatar'
import {Box} from '../Grid'

class EntityCard extends PureComponent {
  render () {
    const {name, description, avatar} = this.props
    return (
      <StyledFlex p={'24px'}>
        {avatar && <Avatar mr={2} src={avatar} /> }
        <Box>
          <StyledHeading mb={1} mt={'2px'}>{name}</StyledHeading>
          {description && <Text muted small>{description}</Text> }
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
