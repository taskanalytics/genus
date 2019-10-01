import React, { Component } from 'react'
import T from 'prop-types'
import { StyledCard, StyledHeading } from './styled'
import Text from '../Text'
import Percentage from '../Percentage'

class CompletionCard extends Component {
  static propTypes = {
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

  static defaultProps = {
    width: 1,
  }

  render () {
    const { name, completion, responses, ...props } = this.props

    return (
      <StyledCard
        completion={completion.value}
        {...props}
        data-genus='CompletionCard'
      >
        <StyledHeading as='h2' mb={[1, 4]}>
          {name}
        </StyledHeading>
        <Percentage size='display' value={completion.value} />
        <Text mt={-1} block>
          {completion.description}
        </Text>
        <Text block mt={2}>
          <strong>{responses.value}</strong> {responses.description}
        </Text>
      </StyledCard>
    )
  }
}

export default CompletionCard
