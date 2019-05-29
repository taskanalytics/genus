import React from 'react'
import T from 'prop-types'
import { StyledLogo } from './styled'

const Logo = props => (
  <StyledLogo viewBox='0 0 224 54' {...props} data-genus='Logo'>
    <path d='M7.27 16.53H.8a.8.8 0 0 1-.8-.8v-3.5c0-.42.34-.8.8-.8h18.48c.46 0 .8.38.8.8v3.5a.8.8 0 0 1-.8.8H12.8v23.89c0 .42-.38.8-.8.8H8.07a.83.83 0 0 1-.8-.8V16.53zm16.91 13.93c1.69 0 3.09.46 3.09.46.04-2.17-.64-2.93-2.2-2.93-1.57 0-3.76.34-4.74.64-.59.17-.89-.22-.97-.77l-.38-2.21c-.13-.64.21-.94.6-1.07.33-.13 3.04-.8 5.74-.8 5.28 0 6.51 2.76 6.51 7.4v9.24c0 .42-.38.8-.8.8H29.5c-.3 0-.51-.12-.72-.59l-.51-1.15a7.24 7.24 0 0 1-5.16 2.17c-3.38 0-5.7-2.21-5.7-5.83 0-3.02 2.45-5.36 6.76-5.36zm.08 7.57a3.9 3.9 0 0 0 2.92-1.66v-2.34s-1.14-.5-2.37-.5c-1.65 0-2.74.93-2.74 2.3 0 1.27.88 2.2 2.2 2.2zm10.63 1.15l1.14-2.3c.17-.42.59-.5.97-.3 0 0 1.9 1.03 3.85 1.03.84 0 1.43-.34 1.43-1.07 0-.76-.59-1.23-2.83-2.12-3.25-1.28-4.77-3.03-4.77-5.62 0-2.6 1.9-5.03 6.2-5.03 2.5 0 4.32.73 5.2 1.32.39.26.6.73.39 1.15l-1.06 2.17c-.2.39-.67.43-1.01.3 0 0-1.9-.9-3.51-.9-1.02 0-1.44.43-1.44.99 0 .76.76 1.02 2.33 1.66 3.25 1.27 5.7 2.68 5.7 6 0 2.8-2.45 5.2-6.72 5.2-2.79 0-4.73-.9-5.62-1.58-.25-.22-.42-.55-.25-.9zm15.37-26.95c0-.42.38-.8.8-.8h3.6c.42 0 .8.38.8.8v18.44l5.83-5.96c.3-.26.6-.51 1.06-.51h3.85c.72 0 .97.76.55 1.23l-6.3 6.47 7.52 8.14c.43.46.17 1.19-.55 1.19h-4.56c-.25 0-.6-.17-.72-.34l-6.68-7.67v7.2c0 .42-.38.8-.8.8h-3.6a.83.83 0 0 1-.8-.8V12.23zm23.67 27.9l13.15-28.66c.13-.26.34-.47.72-.47h.42c.43 0 .6.21.72.47l13.02 28.65c.25.55-.08 1.1-.72 1.1h-3.68c-.63 0-.93-.25-1.22-.84l-2.07-4.6H81.63l-2.07 4.6c-.17.42-.55.85-1.23.85h-3.68c-.63 0-.97-.56-.72-1.1zm18.27-9.08l-4.23-9.36h-.13l-4.14 9.36h8.5zm12.25-6.04a.8.8 0 0 1 .8-.81h1.6c.39 0 .6.21.72.5l.6 1.58a8.3 8.3 0 0 1 5.96-2.5c5.36 0 7.52 4.04 7.52 8.46v8.18c0 .42-.38.8-.8.8h-3.47a.8.8 0 0 1-.8-.8v-8.43c0-2.21-1.14-3.62-3.17-3.62a4.25 4.25 0 0 0-3.98 2.68v9.37c0 .6-.25.8-1.05.8h-3.13a.83.83 0 0 1-.8-.8V25zm26.59 5.45c1.69 0 3.09.46 3.09.46.04-2.17-.64-2.93-2.2-2.93-1.57 0-3.76.34-4.74.64-.59.17-.88-.22-.97-.77l-.38-2.21c-.13-.64.21-.94.6-1.07.33-.13 3.04-.8 5.74-.8 5.28 0 6.51 2.76 6.51 7.4v9.24c0 .42-.38.8-.8.8h-1.52c-.3 0-.51-.12-.72-.59l-.5-1.15a7.25 7.25 0 0 1-5.17 2.17c-3.38 0-5.7-2.21-5.7-5.83 0-3.02 2.45-5.36 6.76-5.36zm11.08-18.23c0-.42.38-.8.8-.8h3.56c.42 0 .8.38.8.8v28.19c0 .42-.38.8-.8.8h-3.55a.83.83 0 0 1-.8-.8V12.23zm7.49 13.07c-.26-.55.08-1.1.71-1.1h3.8c.39 0 .6.21.73.47l4.27 9.62h.04l4.23-9.62c.2-.43.5-.47 1.01-.47h3.38c.68 0 1.02.55.72 1.1l-12.93 28.2c-.13.25-.38.51-.72.51h-3.64c-.63 0-1.01-.55-.72-1.15l6-12.81-6.88-14.74zm22.82 3.37H171c-.42 0-.76-.38-.76-.81v-2.85c0-.47.34-.81.76-.81h1.44v-4.73c0-.42.38-.8.8-.8l3.47-.05c.42 0 .76.38.76.81v4.77h3.72c.47 0 .8.34.8.8v2.86a.8.8 0 0 1-.8.8h-3.72v6.82c0 1.2.64 1.36 1.31 1.36.72 0 1.6-.3 2.07-.47.47-.17.8.05.93.47l.85 2.69c.17.42-.04.85-.46 1.02a16.2 16.2 0 0 1-5.04 1.1c-3.25 0-4.69-2.04-4.69-5.49v-7.5zM185.5 25a.8.8 0 0 1 .8-.81h3.52c.42 0 .8.34.8.8v15.42c0 .42-.38.8-.8.8h-3.51a.83.83 0 0 1-.8-.8V25zm-.38-9.8a2.9 2.9 0 0 1 2.88-2.93 2.94 2.94 0 1 1 0 5.87 2.9 2.9 0 0 1-2.88-2.93zm17.44 8.56a7.71 7.71 0 0 1 6.25 3.03c.3.38.21.89-.21 1.19l-1.94 1.87c-.38.34-.77.13-1.06-.13a3.97 3.97 0 0 0-2.92-1.36 4.26 4.26 0 0 0-4.14 4.34c0 2.43 1.82 4.35 4.1 4.35 1.82 0 2.62-.9 3.38-1.62.3-.3.72-.39 1.06-.13l1.82 1.57c.42.35.59.77.3 1.2a7.52 7.52 0 0 1-6.69 3.57 8.95 8.95 0 0 1-8.96-8.94 9.07 9.07 0 0 1 9-8.94zm8.84 15.41l1.14-2.3c.17-.42.6-.5.98-.3 0 0 1.9 1.03 3.84 1.03.85 0 1.44-.34 1.44-1.07 0-.76-.6-1.23-2.83-2.12-3.26-1.28-4.78-3.03-4.78-5.62 0-2.6 1.9-5.03 6.21-5.03 2.5 0 4.32.73 5.2 1.32.38.26.6.73.38 1.15l-1.05 2.17c-.21.39-.68.43-1.02.3 0 0-1.9-.9-3.5-.9-1.02 0-1.44.43-1.44.99 0 .76.76 1.02 2.32 1.66 3.26 1.27 5.71 2.68 5.71 6 0 2.8-2.45 5.2-6.72 5.2-2.8 0-4.74-.9-5.62-1.58-.26-.22-.43-.55-.26-.9zm-80.28-1.15a3.9 3.9 0 0 0 2.92-1.66v-2.34s-1.14-.5-2.37-.5c-1.65 0-2.74.93-2.74 2.3 0 1.27.88 2.2 2.2 2.2z' />
  </StyledLogo>
)

Logo.propTypes = {
  primary: T.bool,
  light: T.bool,
  dark: T.bool,
  large: T.bool,
}

Logo.defaultProps = {
  primary: false,
  light: false,
  dark: false,
  large: false,
  medium: false,
  small: false,
}

export default Logo
