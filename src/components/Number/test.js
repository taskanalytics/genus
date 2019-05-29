import React from 'react'
import { render } from 'react-testing-library'

import NumberComponent from './index.js'

describe('<Number> component', () => {
  it('renders with just value as span', () => {
    const { container } = render(<NumberComponent value={10} />)
    const node = container.firstChild
    expect(node).toMatchSnapshot()
    expect(node.tagName).toBe('SPAN')
    expect(node.textContent).toBe('10')
  })

  it('renders with description as dl', () => {
    const { container } = render(
      <NumberComponent description='Test' value={10} />,
    )
    const node = container.firstChild
    expect(node).toMatchSnapshot()
    expect(node.tagName).toBe('DL')
    expect(node.firstChild.tagName).toBe('DT')
    expect(node.firstChild.textContent).toBe('10')
    expect(node.lastChild.tagName).toBe('DD')
    expect(node.lastChild.textContent).toBe('Test')
  })
})
