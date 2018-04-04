import React, { Component } from 'react'
import T from 'prop-types'
import {
  StyledCard,
  StyledHeading,
} from './styled'
import Heading from '../Heading'
import Text from '../Text'
import Percentage from '../Percentage'

class CompletionCard extends Component {
  render () {
    const {
      name,
      completion,
      responses,
    } = this.props
    return (
      <StyledCard completion={completion.value}>
        <StyledHeading is='h2' mb={2}>{name}</StyledHeading>
        <Percentage size="display" value={completion.value} />
        <Text block small mb={0}>{completion.description}</Text>
        <Text block small mb={0} mt={2}><strong>{responses.value}</strong> {responses.description}</Text>
      </StyledCard>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  CompletionCard.propTypes = {
    name: T.string.isRequired,
    completion: T.shape({
      value: T.number,
      description: T.string,
    }).isRequired,
    responses: T.shape({
      value: T.number,
      description: T.string,
    }).isRequired,
  }
}

export default CompletionCard
