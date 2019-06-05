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
    render: T.func,
  }

  static defaultProps = {
    width: 1,
  }

  render () {
    const { name, completion, responses, render, ...props } = this.props

    const children = (
      <React.Fragment>
        <StyledHeading as='h2' mb={[1, 4]}>
          {name}
        </StyledHeading>
        <Percentage size='display' value={completion.value} />
        <Text mt={[-2]} block>
          {completion.description}
        </Text>
        <Text block mt={[2, 4]}>
          <strong>{responses.value}</strong> {responses.description}
        </Text>
      </React.Fragment>
    )

    return (
      <StyledCard
        completion={completion.value}
        {...props}
        data-genus='CompletionCard'
      >
        {render ? render({ children }) : children}
      </StyledCard>
    )
  }
}

export default CompletionCard
