import React, { Component } from 'react'
import T from 'prop-types'
import { StyledBox, StyledHeading, StyledText } from './styled'
import Text from '../Text'
import Percentage from '../Percentage'

class ReportComponent extends Component {
  render () {
    const {heading, type, value, description} = this.props

    return (
      <StyledBox p={2} role="button" tabindex="0">
        <StyledHeading is="h2" mb={0}>{heading}</StyledHeading>
        <Text small muted mb={2}>{type}</Text>
        <Percentage size="medium" value={value} description={description} />
      </StyledBox>
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
