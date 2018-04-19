import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'glamorous'
import {Catalog} from 'catalog'
import { css } from 'glamor'
import theme from '../src/styles/theme'

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
          Container: require('../src/components/Grid').Container,
          Box: require('../src/components/Grid').Box,
          ProgressBar: require('../src/components/ProgressBar').default,
        },
        component: require('../src/components/README.md'),
      },
      require('../src/components/Button/catalog').default,
      require('../src/components/Grid/catalog').default,
      require('../src/components/Card/catalog').default,
      require('../src/components/Number/catalog').default,
      require('../src/components/ProgressBar/catalog').default,
      require('../src/components/PieChart/catalog').default,
      require('../src/components/Heading/catalog').default,
      require('../src/components/Text/catalog').default,
      require('../src/components/Report/catalog').default,
      require('../src/components/Dropdown/catalog').default,
      require('../src/components/EntityCard/catalog').default,
      require('../src/components/CompletionCard/catalog').default,
      require('../src/components/Avatar/catalog').default,
      require('../src/components/Header/catalog').default,
      require('../src/components/UserAvatar/catalog').default,
      require('../src/components/Logo/catalog').default,
      require('../src/components/Modal/catalog').default,
      require('../src/components/MultiToggle/catalog').default,
      require('../src/components/EmptyState/catalog').default,
      require('../src/components/Percentage/catalog').default,
      require('../src/components/Form/catalog').default,
      require('../src/components/Banner/catalog').default,
    ].sort((a, b) => {
      return a.title === 'Introduction' ? -1 : a.title.localeCompare(b.title)
    })
  },
]

const config = {
  useBrowserHistory: true,
  title: 'Task Analytics Genus',
  logoSrc: '/static/logos/ta-twolines-preview.png',
  pages,
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Catalog {...config} />
  </ThemeProvider>,
  document.getElementById('catalog')
)
