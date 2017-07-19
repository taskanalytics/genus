import React from 'react'
import ReactDOM from 'react-dom'
import {Catalog} from 'catalog'

const pages = [
  {path: '/', title: 'Introduction', component: require('./Introduction.md')},
  {path: '/assets', title: 'Logo & assets', component: require('./assets.md')},
  {path: '/colors', title: 'Colors', component: require('./Colors.js')},
]

ReactDOM.render(
  <Catalog title='Genus' pages={pages} />,
  document.getElementById('catalog')
)
