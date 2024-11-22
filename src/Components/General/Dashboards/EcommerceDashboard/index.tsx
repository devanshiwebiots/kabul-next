"use client"
import React from 'react'
import { Container, Row } from 'reactstrap'
import Sales from './Sales'
import TotalRevenue from './TotalRevenue'
import TotalOrder from './TotalOrder'
import TotalAppointment from './TotalAppointment'
import UserCountry from './UserCountry'
import OverAllRating from './OverAllRating'
import ProjectDeliveries from './ProjectDeliveries'
import AuditLog from './AuditLog'

const EcommerceDashboardContainer = () => {
  return (
    <Container className='dashboard_ecommerce' fluid>
      <Row>
        <Sales />
        <TotalRevenue />
        <TotalOrder />
        <TotalAppointment />
        <UserCountry />
        <OverAllRating />
        <ProjectDeliveries/>
        <AuditLog/>
      </Row>
    </Container>
  )
}

export default EcommerceDashboardContainer
