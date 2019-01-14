import React from 'react'
import {markdown, ColorSpecimen} from 'catalog'
import {colors} from '../src/styles/colors'

const renderColorSpecimen = (value, name, span = 1) => (
  <ColorSpecimen value={value} span={span} name={name} />
)

export default () => markdown`
We separate between decorative colors and semantic colors. It is of great importance to avoid using semantic colors for purely decorational purposes as that will diminish their meaning in other contexts. Exceptions can, as always, be made, but be wary. If you use the semantic colors for decorational purposes, try to use all of them so the overall expression is not skewed to flag something really good, or really bad.
Colors are exported and usable for *emotion* styling from *src/styles/colors.js*

## Base

${renderColorSpecimen(colors.primary, 'Primary base', 2)}
${renderColorSpecimen(colors.base, 'Primary')}
${renderColorSpecimen(colors.white, 'White')}
${renderColorSpecimen(colors.dark, 'Dark')}

## Text

${renderColorSpecimen(colors.text, 'Normal', 2)}
${renderColorSpecimen(colors.link, 'Link')}
${renderColorSpecimen(colors.white, 'Light contrast')}

## Semantic colors

${renderColorSpecimen(colors.good, 'Good', 4)}
${renderColorSpecimen(colors.goodLight, 'Good light', 2)}

${renderColorSpecimen(colors.headsUp, 'Heads up', 4)}
${renderColorSpecimen(colors.headsUpLight, 'Heads up light', 2)}

${renderColorSpecimen(colors.trouble, 'Trouble', 4)}
${renderColorSpecimen(colors.troubleLight, 'Trouble light', 2)}
`
