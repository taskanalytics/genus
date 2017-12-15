import React, { Component } from 'react'
import T from 'prop-types'
import { Wrapper } from './styled'
import Heading from '../Heading'
import Percentage from '../Percentage'

class SurveyCard extends Component {
  render () {
    const {name, completion} = this.props

    return (
      <Wrapper p={2} role="button" tabindex="0">
        <Heading>{name}</Heading>
        <Percentage size="large" value={completion} description="Completion rate" />
      </Wrapper>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  SurveyCard.propTypes = {
    name: T.string.isRequired,
    completion: T.number,
  }
}

export default SurveyCard
