import React from 'react'
import {Page, CodeSpecimen, ColorSpecimen} from 'catalog'
import {colors} from '../src/styles/colors'

const renderColorSpecimen = (value, name, span = 1) => (
  <ColorSpecimen value={value} span={span} name={name} />
)

const semanticColors = ['good', 'headsUp', 'trouble']
const colorName = color => color[0].toUpperCase() + color.slice(1)

export default () => (
  <Page>
    <p>We separate between decorative colors and semantic colors. It is of great importance to avoid using semantic colors for purely decorational purposes as that will diminish their meaning in other contexts. Exceptions can, as always, be made, but be wary. If you use the semantic colors for decorational purposes, try to use all of them so the overall expression is not skewed to flag something really good, or really bad.</p>
    <p>Colors are exported and usable for *glamor* styling from `src/styles/colors.js`</p>
    <hr />

    <h2>Base</h2>
    {renderColorSpecimen(colors.primary, 'Primary base', 2)}
    {renderColorSpecimen(colors.base, 'Primary')}
    {renderColorSpecimen(colors.white, 'White')}
    {renderColorSpecimen(colors.dark, 'Dark')}

    <h2>Text</h2>
    {renderColorSpecimen(colors.text, 'Normal', 2)}
    {renderColorSpecimen(colors.link, 'Link')}
    {renderColorSpecimen(colors.white, 'Light contrast')}

    <h2>Semantic colors</h2>
    {semanticColors.map(color => {
      const light = `${color}Light`
      return [
        renderColorSpecimen(colors[color], colorName(color), 4),
        renderColorSpecimen(colors[light], colorName(light), 2),
      ]
    })}

    <h2>Usage</h2>
    <CodeSpecimen span={3} lang="js">
      {`
import {colors} from 'genus/styles'
const color = colors.troubleLight
      `}
    </CodeSpecimen>

  </Page>
)
