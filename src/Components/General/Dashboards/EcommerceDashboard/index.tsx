import React from 'react'
import { Container, Row } from 'reactstrap'
import Sales from './Sales'

const EcommerceDashboardContainer = () => {
  return (
    <Container className='dashboard_ecommerce' fluid>
    <Row>
      <Sales/>  
    </Row>
</Container>
  )
}

export default EcommerceDashboardContainer
