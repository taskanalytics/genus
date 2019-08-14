import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import {
  render,
  fireEvent,
  waitForElement,
  cleanup,
} from '@testing-library/react'

import theme from '../../styles/theme'
import Dropdown from './index.js'

const renderComponent = props =>
  render(
    <ThemeProvider theme={theme}>
      <Dropdown {...props} />
    </ThemeProvider>,
  )

const actions = [
  { name: 'Act', action: jest.fn() },
  { name: 'Delete', action: jest.fn() },
]

afterEach(cleanup)

describe('<Dropdown> component', () => {
  it('renders trigger button and no content', () => {
    const { container, queryByText } = renderComponent({ actions })
    const node = container.firstChild
    const trigger = container.querySelector('button')
    expect(node).toMatchSnapshot()
    expect(trigger).toHaveTextContent('Toggle')
    expect(queryByText('Act')).toBeNull()
  })

  it('opens on click', () => {
    const { container } = renderComponent({ actions })
    const trigger = container.querySelector('button:first-child')

    fireEvent.click(trigger)

    expect(container).toMatchSnapshot()
    const dropdown = container.firstChild.lastChild
    expect(dropdown).not.toHaveStyle('display: none;')

    const buttons = dropdown.querySelectorAll('button')
    expect(buttons[1].textContent).toBe('Act')
    expect(buttons[2].textContent).toBe('Delete')
  })

  it('calls action fn on action click', () => {
    const data = {
      name: 'Act',
      action: jest.fn(() => true),
    }
    const { container, queryByText, getByText } = renderComponent({
      actions: [data],
    })

    fireEvent.click(container.querySelector('button:first-child'))

    fireEvent.click(getByText('Act'))

    expect(data.action.mock.calls.length).toBe(1)
    expect(queryByText('Act')).toBeNull()
  })

  it('closes on click outside', () => {
    const { container, queryByText, getByText } = renderComponent({ actions })

    // OPen dropdown
    fireEvent.click(getByText('Toggle'))

    expect(getByText('Act')).toBeInTheDocument()

    // Close with click outside (on container)
    fireEvent.click(window.document.body)

    expect(queryByText('Act')).toBeNull()
  })
})
