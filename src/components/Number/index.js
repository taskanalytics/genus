import {DL, DT, DD} from './styled'

export default props => {
  const {size, sup, value, description} = props

  return (
    <DL size={size}>
      <DT size={size}>{value}{sup && <sup>{sup}</sup>}</DT>
      <DD size={size}>{description}</DD>
    </DL>
  )
}
