import React, { Component } from 'react'
import T from 'prop-types'
import {
  StyledBox,
  StyledHeading,
  StyledBody,
  ActionsList,
  ActionItem,
} from './styled'

class EmptyState extends Component {
  render () {
    const {
      actions,
      heading,
      body,
      ...props
    } = this.props
    return (
      <StyledBox p={3} {...props} data-genus="EmptyState">
        <StyledHeading is='h2'>{heading}</StyledHeading>
        <StyledBody mb={4}>{body}</StyledBody>
        {actions &&
          <ActionsList role='toolbar'>
            {actions.map((action, key) =>
              <ActionItem role='menuitem' key={key}>{action}</ActionItem>
            )}
          </ActionsList>
        }
      </StyledBox>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  EmptyState.propTypes = {
    actions: T.array,
    heading: T.string,
    body: T.object,
  }
}

export default EmptyState
