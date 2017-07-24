import { mq } from './breakpoints'

export const spacedText = () => ({
  textTransform: 'uppercase',
  letterSpacing: '0.17em',
})

const textWeights = {
  light: 300,
  normal: 400,
  bold: 700,
}

export const font = (weight) => {
  const result = {
    fontFamily: 'Brandon Text, sans-serif',
  }
  if (!weight) {
    return result
  }

  return {
    ...result,
    fontWeight: weight in textWeights ? textWeights[weight] : weight,
  }
}

const fontSizes = {
  xxxsmall: { base: '12px' },
  xxsmall: { base: '14px' },
  xsmall: { base: '15px', md: '16px' },
  small: { base: ['19px', 1.3] },
  medium: { base: ['22px', 1.6] },
  large: { base: ['26px', 1.1] },
  xlarge: { base: '30px', md: '32px', lg: '40px' },
  xxlarge: { base: '30px', md: '38px', lg: '44px' },
}

const fontSizeRule = fontSize => {
  if (Array.isArray(fontSize)) {
    return {
      fontSize: fontSize[0],
      lineHeight: fontSize[1],
    }
  }
  return { fontSize }
}

export const fontSize = sizeName => {
  const obj = fontSizes[sizeName]
  const { base, ...rest } = obj
  const breakpoints = Object.keys(rest)

  let mqRules = {}
  breakpoints.forEach(breakpoint => {
    mqRules = {
      ...mqRules,
      ...mq(breakpoint, fontSizeRule(rest[breakpoint]))
    }
  })

  return {
    ...fontSizeRule(base),
    ...mqRules,
  }
}
