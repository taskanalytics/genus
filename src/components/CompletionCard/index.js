import React, { Component } from 'react'
import T from 'prop-types'
import { getPercentage } from '../../utils/calculations'
import { StyledBox } from './styled'
import Heading from '../Heading'
import Percentage from '../Percentage'

class CompletionCard extends Component {
  render () {
    const {name, completion} = this.props

    return (
      <StyledBox
        p={2}
        role="button"
        tabindex="0"
        css={{
          backgroundPosition: `${getPercentage(completion, 1)}% center`,
        }}>
        <Heading is='h2'>{name}</Heading>
        <Percentage size="large" value={completion} description="Completion rate" />
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
