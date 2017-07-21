import Grid from '.'
import glamorous from 'glamorous'

export default {
  title: 'Grid',
  path: '/components/grid',
  imports: {
    Grid: glamorous(Grid)({border: '1px solid green'})
  },
  component: require('./README.md'),
}
