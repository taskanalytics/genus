import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { render, fireEvent, waitForElement } from '@testing-library/react'

import theme from '../../styles/theme'
import Card from './index.js'

const renderComponent = props =>
  render(
    <ThemeProvider theme={theme}>
      <Card {...props} />
    </ThemeProvider>,
  )

describe('<Card> component', () => {
  it('renders a heading', () => {
    const { container } = renderComponent({ children: <span>Text</span> })
    const node = container.firstChild
    expect(node).toMatchSnapshot()
    expect(node.tagName).toBe('DIV')
    expect(node.textContent).toBe('Text')
  })

  it('renders actions when clicked', async () => {
    const { container, getByText } = renderComponent({
      children: <span>Text</span>,
      actions: [{ name: 'Test' }],
    })
    const node = container.firstChild
    expect(node).toMatchSnapshot()
    const actionsContainer = node.querySelector('[data-genus="Dropdown"]')
    const button = node.querySelector('button')

    fireEvent.click(button)

    expect(getByText('Test')).toBeInTheDocument()
  })
})
