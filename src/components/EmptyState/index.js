import React, { Component } from 'react'
import T from 'prop-types'
import { Box, Flex } from '../Grid'
import Heading from '../Heading'
import { StyledBox, ActionItem } from './styled'

class EmptyState extends Component {
  render () {
    const { actions, heading, body, children, ...props } = this.props
    return (
      <StyledBox p={3} {...props} data-genus='EmptyState'>
        <Heading as='h2' color='muted'>
          {heading}
        </Heading>
        <Box color='muted' mt={2}>
          {children || body}
        </Box>
        {actions && (
          <Flex mt={3} flexDirection={['column', 'row']}>
            {actions.map((action, key) => (
              <ActionItem key={key}>{action}</ActionItem>
            ))}
          </Flex>
        )}
      </StyledBox>
    )
  }
}

EmptyState.propTypes = {
  actions: T.array,
  heading: T.string,
  body: T.object,
}

export default EmptyState
