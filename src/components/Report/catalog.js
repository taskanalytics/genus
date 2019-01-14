import { ReportCard, ComparisonCard } from '.'
import Percentage from '../Percentage'
import Card from '../Card'
import { Flex } from '../Grid'

export default {
  title: 'Report',
  path: '/components/report',
  imports: { Card, Percentage, ReportCard, ComparisonCard, Flex },
  component: require('./README.md'),
}
