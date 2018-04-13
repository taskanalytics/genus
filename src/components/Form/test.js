import React from 'react'
import test from 'ava'
import { renderJSX, JSX } from 'jsx-test-helpers'

import Number from './index.js'

test(`<Number> renders a proper <dl> structure`, t => {
  const actual = renderJSX(
    <Number description="Test" value={10} />
  )
  const expected = JSX(
    <dl className="number">
      <dt className="number__value">10</dt>
      <dd className="number__description">Test</dd>
    </dl>
  )

  t.is(actual, expected)
})

test(`<Number> supports --small`, t => {
  const actual = renderJSX(
    <Number description="Test" value={10} size="small" />
  )

  t.true(actual.includes('className="number number--small"'))
})
