"use client"
import { Container } from 'reactstrap'
import OtherCharts from './OtherCharts'
import TotalChange from './TotalChange'

const ChartWidgetsContainer = () => {
  return (
    <Container fluid >
      <TotalChange />
      <OtherCharts />
    </Container>
  )
}

export default ChartWidgetsContainer
