import React, { Component } from 'react'
import T from 'prop-types'
import {
  StyledCard,
  StyledHeading,
  StyledText,
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
        <StyledText small>{completion.description}</StyledText>
        <StyledText small mt={2}><strong>{responses.value}</strong> {responses.description}</StyledText>
      </StyledCard>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  CompletionCard.propTypes = {
    name: T.string.isRequired,
    completion: T.object,
    responses: T.object,
  }
}

export default CompletionCard
