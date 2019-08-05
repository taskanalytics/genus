import styled from '@emotion/styled'
import css from '@styled-system/css'
import { Flex, Grid } from '../Grid'
import shouldForwardProp from '@styled-system/should-forward-prop'

export const StyledWrapper = styled(Grid)(({ block, row, flat }) =>
  css({
    overflow: 'hidden',
    display: block ? 'grid' : 'inline-grid',
    borderRadius: !flat && (row ? 30 : 10),
    textAlign: row ? 'center' : 'start',
    fontWeight: 500,
  }),
)

export const StyledRadio = styled('input')({ display: 'none' })

const sharedLabelStyles = {
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  py: 2,
}

export const StyledFlatLabel = styled('label', {
  shouldForwardProp,
})(({ children, active, destructive, ...props }) => {
  let color = 'text'
  switch (true) {
    case active && destructive:
      color = 'troubleDark'
      break
    case active:
      color = 'primary'
      break
  }
  return css({
    ...sharedLabelStyles,
    px: [1, 2],
    color,
    fontWeight: active && 700,
    '&:hover': {
      color: destructive ? 'trouble' : 'primaryShaded',
    },
    ...props,
  })
})

export const StyledLabel = styled('label', {
  shouldForwardProp,
})(
  ({ children, row, ...props }) => {
    const borderProp = row ? 'borderRight' : 'borderBottom'
    return css({
      ...sharedLabelStyles,
      bg: 'rgb(236, 239, 241)',
      px: [2, 3],
      [borderProp]: '1px solid #CFD5DB',
      '&:last-of-type': {
        [borderProp]: 'none',
      },
      ...props,
    })
  },
  ({ active, destructive }) => {
    let styles = {}
    if (active) {
      styles = css({
        color: 'white',
        bg: destructive ? 'trouble' : 'primary',
      })
    } else {
      styles['&:hover'] = css({
        color: 'white',
        bg: destructive ? 'troubleDark' : 'primaryShaded',
      })
    }
    return styles
  },
)
