import glamorous from 'glamorous'
import {rgba} from 'polished'
import * as spacing from '../../styles/spacing'
import {font, fontSize} from '../../styles/mixins'
import theme from '../../styles/theme'
import {colors} from '../../styles/colors'
import {Box} from '../Grid'


export const StyledList = glamorous.ul({
  backgroundColor: colors.white,
  borderRadius: theme.radius*2,
  padding: spacing.unit,
  boxShadow: '0 0 0 2px rgba(0,0,0,0.1)',
  maxWidth: '360px',
})

export const StyledOption = glamorous(Box)({
  ...font('normal'),
  backgroundColor: 'transparent',
  padding: spacing.unit,
  paddingLeft: spacing.unit*2,
  paddingRight: spacing.unit*2,
  borderRadius: theme.radius,
  color: colors.primary,
  cursor: 'pointer',
  '&:hover,&:focus,&:active': {
    backgroundColor: rgba(colors.primary, 0.1),
  },
}, props => {
  if (props.destructive) {
    return {
      color: colors.trouble,
      '&:hover,&:focus,&:active': {
        backgroundColor: rgba(colors.trouble, 0.1),
      },
    }
  }
  if (props.disabled) {
    return {
      color: rgba(colors.text,0.5),
      cursor: 'not-allowed',
      '&:hover,&:focus,&:active': {
        backgroundColor: 'transparent',
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
