import glamorous from 'glamorous'

import * as spacing from '../../styles/spacing'
import {radius} from '../../styles/config'
import {font, fontSize} from '../../styles/mixins'
import {colors} from '../../styles/colors'
import {Box} from '../Grid'

export const StyledDropdown = glamorous(Box)({
  backgroundColor: colors.white,
  padding: spacing.unit,
})

export const StyledOption = glamorous(Box)({
  ...font('normal'),
  backgroundColor: 'transparent',
  padding: spacing.unit,
  paddingLeft: spacing.unit*2,
  paddingRight: spacing.unit*2,
  borderRadius: radius,
  '&:hover,&:focus,&:active': {
    backgroundColor: colors.primary,
    color: colors.white,
  },
}, props => {
  if (props.destructive) {
    return {
      color: colors.trouble,
      '&:hover,&:focus,&:active': {
        backgroundColor: colors.trouble,
      },
    }
  }
})

export const StyledSeparator = glamorous('span')({
  backgroundColor: 'rgba(0,0,0,0.1)',
  display: 'block',
  width: '100%',
  height: '1px',
  marginTop: spacing.unit,
  marginBottom: spacing.unit,
})
