import mngen from 'mngen'

const capitalize = ([f, ...r]) => f.toUpperCase() + r.join('')

export function options (num, { destructive = [], glue } = {}) {
  return mngen.list(num, glue).map((word, i) => {
    return {
      value: word,
      name: word.split('-').map(capitalize).join(' '),
      destructive: destructive.includes(i),
    }
  })
}
