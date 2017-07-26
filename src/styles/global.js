import { css } from 'glamor'
import {font, fontSize} from './mixins'
import * as spacing from './spacing'
import fonts from './fonts'

export function injectGlobals () {
  // A hack to inject our fonts to the catalog build
  fonts.forEach(font => {
    css.global('@font-face', font['@font-face'])
  })

  css.global('*', {
    boxSizing: 'border-box',
  })

  css.global('body, html, p, blockquote, pre, dl, dd, ol, ul, form, fieldset, legend, table, th, td, caption, hr, figure', {
    margin: 0,
    padding: 0,
  })

  css.global('h1, h2, h3, h4, h5, h6', {
    ...font('bold'),
    wordWrap: 'break-word',
    margin: 0,
    padding: 0,
    marginBottom: spacing.base,
  })

  css.global('h1', fontSize('xxlarge'))
  css.global('h2', fontSize('xlarge'))
  css.global('h3', {
    ...fontSize('large'),
    letterSpacing: '0.4px',
  })
  css.global('h4', {
    ...fontSize('small'),
    letterSpacing: '0.3px',
  })

  css.global('p', {
    ...font('normal'),
    ...fontSize('small'),
    letterSpacing: '0.3px',
    marginBottom: spacing.base,

    '&:empty': {
      display: 'none',
    },
  })

  css.global('strong, b', font('bold'))

  css.global('sup', {
    position: 'relative',
    verticalAlign: 'baseline',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 0,
    top: '-0.35em',
    fontSize: '0.65em',
  })
}

/*
.text-muted {
    color: $color-muted;
}

.text-center {
    text-align: center;
}

blockquote {
    @include font(base, normal);
    font-style: italic;
    word-wrap: break-word;

    &:before {
        content: '- ';
    }

}

// sup
sup {
    position: relative;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    line-height: 0;
    top: -0.35em;
    font-size: 0.65em;
}
*/
