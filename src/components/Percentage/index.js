import withProps from 'recompose/withProps'
import Number from '../Number'

export default withProps(props => ({
  sup: '%',
}))(Number)
