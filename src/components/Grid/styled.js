import glamorous from 'glamorous'

import * as spacing from '../../styles/spacing'

import styleIf from '../../utils/styleIf'

const widths = {
  tight: '680px',
  base: '980px',
  wide: '1200px',
}

export default glamorous('div')(
  {
    margin: '0 auto',
    maxWidth: widths.base,
    position: 'relative',
    paddingLeft: spacing.base,
    paddingRight: spacing.base,

    '.grid': {
      paddingLeft: 0,
      paddingRight: 0,
    }
  },
  styleIf('tight', { maxWidth: widths.tight }),
  styleIf('wide', { maxWidth: widths.wide }),
  styleIf('row', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  })
)
