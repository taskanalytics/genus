/** @jsx jsx */ import React from 'react'
import T from 'prop-types'
import { jsx } from '@emotion/core'

import {
  StyledWrapper,
  StyledRadio,
  StyledLabel,
  StyledFlatLabel,
} from './styled'

function MultiToggle ({
  options,
  selectedOption,
  onSelectOption,
  direction,
  flat,
  ...props
}) {
  const row = direction === 'row'
  const fr = flat ? 'auto' : '1fr'
  const Label = flat ? StyledFlatLabel : StyledLabel

  return (
    <StyledWrapper
      flat={flat}
      row={row}
      grid={row ? `1fr / auto-flow ${fr}` : `auto-flow ${fr} / 1fr`}
      {...props}
      data-genus='MultiToggle'
    >
      {options.filter(Boolean).map(({ value, name, destructive, row }) => {
        const active = selectedOption === value
        return (
          <Label key={value} {...{ row, active, destructive }}>
            <StyledRadio
              type='radio'
              checked={active}
              onChange={() => onSelectOption(value)}
            />
            {name}
          </Label>
        )
      })}
    </StyledWrapper>
  )
}

MultiToggle.propTypes = {
  options: T.array.isRequired,
  selectedOption: T.string,
  onSelectOption: T.func,
  direction: T.string,
  flat: T.bool,
  block: T.bool,
}
MultiToggle.defaultProps = {
  direction: 'row',
}

export default MultiToggle
