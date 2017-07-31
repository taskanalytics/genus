import React from 'react'
import ReactDOM from 'react-dom'
import {Catalog} from 'catalog'
import { css } from 'glamor'

import { injectGlobals } from '../src/styles/global'

injectGlobals(css)

const pages = [
  {path: '/', title: 'Introduction', component: require('./Introduction.md')},
  {path: '/assets', title: 'Logo & assets', component: require('./assets.md')},
  {path: '/typography', title: 'Typography', component: require('./Typography.md')},
  {path: '/colors', title: 'Colors', component: require('./Colors.js')},
  {path: '/tone-of-voice', title: 'Tone of voice', component: require('./ToneOfVoice.md')},
  {path: '/components',
    title: 'Components',
    pages: [
      {
        title: 'Introduction',
        path: '/components/introduction',
        imports: {
          styles: require('../src/styles').default,
          Button: require('../src/components/Button').default,
          Grid: require('../src/components/Grid').default,
          ProgressBar: require('../src/components/ProgressBar').default,
        },
        component: require('../src/components/README.md'),
      },
      require('../src/components/Button/catalog').default,
      require('../src/components/Grid/catalog').default,
      require('../src/components/Number/catalog').default,
      require('../src/components/ProgressBar/catalog').default,
      require('../src/components/PieChart/catalog').default,
    ]},
]

const config = {
  useBrowserHistory: true,
  title: 'Task Analytics Genus',
  logoSrc: '/static/logos/ta-twolines-preview.png',
  pages,
}

ReactDOM.render(
  <Catalog {...config} />,
  document.getElementById('catalog')
)
