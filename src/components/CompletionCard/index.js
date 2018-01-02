import React, { Component } from 'react'
import T from 'prop-types'
import { getPercentage } from '../../utils/calculations'
import { StyledBox, StyledHeading, StyledText } from './styled'
import Heading from '../Heading'
import Text from '../Text'
import Percentage from '../Percentage'

class CompletionCard extends Component {
  render () {
    const {name, completion} = this.props

    return (
      <StyledBox
        p={3}
        role="button"
        tabindex="0"
        css={{
          backgroundPosition: `${getPercentage(completion, 1)}% center`,
        }}>
        <StyledHeading is='h2' mb={3}>{name}</StyledHeading>
        <StyledText small muted>Completion rate</StyledText>
        <Percentage size="large" value={completion} />
      </StyledBox>
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
