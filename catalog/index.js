import React from 'react'
import ReactDOM from 'react-dom'
import {Catalog} from 'catalog'

const pages = [
  {path: '/', title: 'Introduction', component: require('./README.md')}
]

ReactDOM.render(
  <Catalog title='Genus' pages={pages} />,
  document.getElementById('catalog')
)
