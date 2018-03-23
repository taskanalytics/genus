import glamorous from 'glamorous'
import {css} from 'glamor'
import theme from '../../styles/theme'
import {fontSize} from '../../styles/mixins'
import Heading from '../Heading'
import {Box, Flex} from '../Grid'
import ReactModal from 'react-modal'

export const overlayStyles = css({
  backgroundColor: 'rgba(0,0,0,0.2)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
})

export const StyledModal = glamorous(ReactModal)({
  width: '680px',
  position: 'absolute',
  top: '200px',
  left: '50%',
  transform: 'translateX(-50%)',
  flexDirection: 'column',
  borderRadius: theme.radius * 2,
  backgroundColor: theme.colors.white,
  overflow: 'hidden',
  '&:focus': {
    outline: 'none',
  },
}
)

export const StyledHeader = glamorous(Flex)({

})

export const StyledCloseButton = glamorous(Box)({

})

export const StyledTitle = glamorous(Heading)({
  ...fontSize('xlarge'),
})

export const StyledBody = glamorous(Box)({

})

export const StyledActions = glamorous(Box)({
  textAlign: 'right',
})
