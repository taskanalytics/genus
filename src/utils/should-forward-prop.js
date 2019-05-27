const memoize = require('@emotion/memoize').default
const isPropValid = require('@emotion/is-prop-valid').default
const systemProps = require('styled-system/props')

const regex = new RegExp(
  `^(${systemProps.join('|')})$`
)

export default memoize(prop => isPropValid(prop) && !regex.test(prop))
