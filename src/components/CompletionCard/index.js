import React, { Component } from 'react'
import T from 'prop-types'
import {
  StyledBox,
  StyledHeading,
  StyledHeadingCreate,
  StyledText,
  StyledCreate,
} from './styled'
import Heading from '../Heading'
import Text from '../Text'
import Percentage from '../Percentage'

class CompletionCard extends Component {
  render () {
    const {
      name,
      completion
    } = this.props
    return (
      <StyledBox p={3} completion={completion}>
        <StyledHeading is='h2' mb={3}>{name}</StyledHeading>
        <StyledText small muted>Completion rate</StyledText>
        <Percentage size="large" value={completion} />
      </StyledBox>
    )
  }
}

export class CompletionCardCreate extends Component {
  render () {
    const {

    } = this.props
    return (
      <StyledCreate p={3}>
        <StyledText small muted>Create survey</StyledText>
      </StyledCreate>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  CompletionCard.propTypes = {
    name: T.string.isRequired,
    completion: T.number,
  }
}

export default CompletionCard
