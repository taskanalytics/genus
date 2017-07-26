import { css as glamorCss, cssFor } from 'glamor'
import {font, fontSize} from './mixins'
import * as spacing from './spacing'
import fonts from './fonts'

const keyfix = name => name.replace(/([a-z]{1})([A-Z]{1})/, (a, b, c) => {
  return `${b}-${c.toLowerCase()}`
})
function zip (obj) {
  return Object.keys(obj).map(k => {
    const key = keyfix(k)
    return `${key}: ${obj[k]};`
  }).join('\n')
}

function globalMqHack (css, selector, rules) {
  Object.keys(rules).forEach(rule => {
    if (rule[0] === '@') {
      const finalRule = `${rule} { ${selector} { ${zip(rules[rule])} } }`
      css.insert(finalRule)
    } else {
      css.global(selector, { [rule]: rules[rule] })
    }
  })
}

export function injectGlobals (css = glamorCss) {
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

  globalMqHack(css, 'h1', fontSize('xxlarge'))
  globalMqHack(css, 'h2', fontSize('xlarge'))
  globalMqHack(css, 'h3', fontSize('large'))
  css.global('h3', {
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
