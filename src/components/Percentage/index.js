import withProps from 'recompose/withProps'
import NumberComponent from '../Number'

export default withProps(props => ({
  suffix: '%',
}))(NumberComponent)
