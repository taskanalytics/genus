import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import { render } from 'react-testing-library'

import theme from '../../styles/theme'
import Card from './index.js'

const renderComponent = (props) => render(
  <ThemeProvider theme={theme}>
    <Card {...props} />
  </ThemeProvider>
)

describe('<Card> component', () => {
  it('renders a heading', () => {
    const { container } = renderComponent({ children: <span>Text</span> })
    const node = container.firstChild
    expect(node).toMatchSnapshot()
    expect(node.tagName).toBe('DIV')
    expect(node.textContent).toBe('Text')
  })

  it('renders actions', () => {
    const { container } = renderComponent({
      children: <span>Text</span>,
      actions: [{name: 'Test'}],
    })
    const node = container.firstChild
    expect(node).toMatchSnapshot()
    expect(node.tagName).toBe('DIV')
    const button = node.querySelector('div button')
    expect(button.firstChild.tagName).toBe('svg')
  })
})
