import glamorous from 'glamorous'
import {colors} from '../../styles/colors'
import {font, fontSize} from '../../styles/mixins'

const paddingX = 20
const paddingY = 12
const paddingExtra = 6

export const StyledForm = glamorous.form({
  borderRadius: '30px',
  overflow: 'hidden',
  display: 'inline-block',
})

export const StyledRadio = glamorous.input({
  display: 'none',
})

export const StyledLabel = glamorous.label({
  ...font('bold'),
  ...fontSize('xsmall'),
  backgroundColor: '#ECEFF1',
  padding: `${paddingY}px ${paddingX}px`,
  display: 'inline-block',
  borderRight: '1px solid #CFD5DB',
  cursor: 'pointer',
  '&:first-child': {
    paddingLeft: (paddingX + paddingExtra),
  },
  '&:last-child': {
    borderRight: 'none',
    paddingRight: (paddingX + paddingExtra),
  },
}, props => {
  if(props.active) {
    let styles = {}
    styles = {
      backgroundColor: colors.primary,
      color: '#fff',
    }
    if(props.destructive) {
      styles = {
        ...styles,
        backgroundColor: colors.trouble,
      }
    }
    return styles
  }
})
