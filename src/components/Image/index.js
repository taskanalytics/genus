import React, { Component } from 'react'
import T from 'prop-types'
import { StyledImage, Wrapper, propTypes } from './styled'
import { Box } from '../Grid'

// sources={[{ src, breakpoint }]}

function Image ({
  src,
  sources,
  alt,
  sizes,
  width,
  height,
  borderRadius,
  ...props
}) {
  const srcset =
    sources &&
    Object.entries(sources)
      .map(([breakpoint, src]) => `${src} ${breakpoint}`)
      .join(', ')

  return (
    <Wrapper
      {...props}
      width={width}
      height={height}
      borderRadius={borderRadius}
    >
      <StyledImage
        src={src}
        borderRadius={borderRadius}
        srcset={srcset}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        data-genus='Image'
      />
    </Wrapper>
  )
}

Image.defaultProps = {
  borderRadius: 1,
}

Image.propTypes = {
  src: T.string.isRequired,
  sources: T.arrayOf(
    T.shape({
      src: T.string,
      breakpoint: T.string,
    }),
  ),
  sizes: T.string,
  alt: T.string.isRequired,
  ...propTypes,
}

export default Image
