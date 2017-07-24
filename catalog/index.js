import React from 'react'
import ReactDOM from 'react-dom'
import {Catalog} from 'catalog'

import '../src/styles/global'

const pages = [
  {path: '/', title: 'Introduction', component: require('./Introduction.md')},
  {path: '/assets', title: 'Logo & assets', component: require('./assets.md')},
  {path: '/typography', title: 'Typography', component: require('./Typography.md')},
  {path: '/colors', title: 'Colors', component: require('./Colors.js')},
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
      require('../src/components/ProgressBar/catalog').default,
    ]},
]

ReactDOM.render(
  <Catalog title='Task Analytics Genus' pages={pages} />,
  document.getElementById('catalog')
)
