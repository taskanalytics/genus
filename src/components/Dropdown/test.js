import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import { render, fireEvent, waitForElement, cleanup } from 'react-testing-library'

import theme from '../../styles/theme'
import Dropdown from './index.js'

const renderComponent = (props) => render(
  <ThemeProvider theme={theme}>
    <Dropdown {...props} />
  </ThemeProvider>
)

const actions = [
  {name: 'Act', action: jest.fn()},
  {name: 'Delete', action: jest.fn()},
]

afterEach(cleanup)

describe('<Dropdown> component', () => {
  it('renders trigger button and hidden content', () => {
    const { container } = renderComponent({ actions })
    const node = container.firstChild
    const trigger = node.firstChild
    const dropdown = node.lastChild
    expect(node).toMatchSnapshot()
    expect(node.tagName).toBe('DIV')
    expect(trigger.tagName).toBe('BUTTON')
    expect(trigger.textContent).toBe('Toggle')
    expect(dropdown).toHaveStyle('display: none;')
  })

  it('opens on click', () => {
    const { container } = renderComponent({ actions })
    const trigger = container.querySelector('button:first-child')
    const dropdown = container.firstChild.lastChild

    fireEvent.click(trigger)
    expect(dropdown).toHaveStyle('display: block;')

    const buttons = dropdown.querySelectorAll('button')
    expect(buttons).toHaveLength(2)
    expect(buttons[0].textContent).toBe('Act')
    expect(buttons[1].textContent).toBe('Delete')
  })

  it('calls action fn on action click', () => {
    const data = {
      name: 'Act',
      action: jest.fn(() => true),
    }
    const { container, getByText } = renderComponent({
      actions: [data],
    })

    fireEvent.click(getByText('Act'))

    expect(data.action.mock.calls.length).toBe(1)
    expect(container.firstChild.lastChild).toHaveStyle('display: none;')
  })

  it('closes on click outside', () => {
    const { container, getByText } = renderComponent({ actions })

    // OPen dropdown
    fireEvent.click(getByText('Toggle'))

    expect(container.firstChild.lastChild).toHaveStyle('display: block;')

    // Close with click outside (on container)
    fireEvent.click(container)

    expect(container.firstChild.lastChild).toHaveStyle('display: none;')
  })
})
