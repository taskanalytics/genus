import React from 'react'
import ReactDOM from 'react-dom'
import {Catalog} from 'catalog'

import { css } from 'glamor'
import fonts from '../src/styles/fonts'

// A hack to inject our fonts to the catalog build
fonts.forEach(font => {
  css.global('@font-face', font['@font-face'])
})

const pages = [
  {path: '/', title: 'Introduction', component: require('./Introduction.md')},
  {path: '/assets', title: 'Logo & assets', component: require('./assets.md')},
  {path: '/typography', title: 'Typography', component: require('./Typography.md')},
  {path: '/colors', title: 'Colors', component: require('./Colors.js')},
  {path: '/components', title: 'Components', pages: [
    {path: '/components/button', title: 'Button', component: require('./components/Button.js')},
  ]}
]

ReactDOM.render(
  <Catalog title='Task Analytics Genus' pages={pages} />,
  document.getElementById('catalog')
)
