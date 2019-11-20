import React, { Fragment } from 'react'
import T from 'prop-types'
import { StyledCard } from './styled'
import { Box } from '../Grid'
import Text from '../Text'
import Heading from '../Heading'
import Percentage from '../Percentage'

function CompletionCard ({
  name,
  subheading,
  completion,
  responses,
  ...props
}) {
  return (
    <StyledCard
      completion={completion.value}
      {...props}
      data-genus='CompletionCard'
    >
      <Heading as='h2' fontSize={3} ellipsis pr={props.actions && 28}>
        {name}
      </Heading>
      {subheading && (
        <Heading as='h3' m={0}>
          {subheading}
        </Heading>
      )}
      {responses.value > 0 && (
        <Box mt={[1, 3]}>
          <Percentage size='display' value={completion.value} />
          <Text mt={-1} block>
            {completion.description}
          </Text>
        </Box>
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
