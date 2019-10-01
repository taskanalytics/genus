import React, { Fragment } from 'react'
import T from 'prop-types'
import { StyledCard, StyledHeading } from './styled'
import Text from '../Text'
import Percentage from '../Percentage'

function CompletionCard ({ name, completion, responses, ...props }) {
  return (
    <StyledCard
      completion={completion.value}
      {...props}
      data-genus='CompletionCard'
    >
      <StyledHeading as='h2' mr={props.actions && 24}>
        {name}
      </StyledHeading>
      {responses.value > 0 && (
        <Fragment>
          <Percentage size='display' value={completion.value} />
          <Text mt={-1} block>
            {completion.description}
          </Text>
        </Fragment>
      )}
      <Text block pt={2} mt='auto'>
        <strong>{responses.value}</strong> {responses.description}
      </Text>
    </StyledCard>
  )
}

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

export default CompletionCard
