import React, { Component } from 'react'
import T from 'prop-types'
import { Wrapper, StyledHeading, StyledText } from './styled'
import Percentage from '../Percentage'

class ReportComponent extends Component {
  render () {
    const {heading, type, value, description} = this.props

    return (
      <Wrapper p={2} role="button" tabindex="0">
        <StyledHeading is="h2">{heading}</StyledHeading>
        <StyledText>{type}</StyledText>
        <Percentage size="large" value={value} description={description} />
      </Wrapper>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  ReportComponent.propTypes = {
    heading: T.string.isRequired,
    type: T.string.isRequired,
    value: T.number.isRequired,
    description: T.string,
  }
}

export default ReportComponent
