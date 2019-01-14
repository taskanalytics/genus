import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import styleIf from '../../utils/styleIf'

const mediumHeight = '30px'
const mediumWidth = '125px'

const largeHeight = '60px'
const largeWidth = '250px'

const styledLarge = styleIf('large', {
  height: largeHeight,
  width: largeWidth,
})

const styledPrimary = styleIf('primary', {
  fill: colors.primary,
})

const styledLight = styleIf('light', {
  fill: '#FFF',
})

const styledDark = styleIf('dark', {
  fill: colors.text,
})

export const StyledLogo = styled('svg')({
  height: mediumHeight,
  width: mediumWidth,
  fill: colors.text,
}, styledPrimary, styledLight, styledDark, styledLarge)
