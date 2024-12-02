"use client"
import React from 'react'
import { Container, Row } from 'reactstrap'
import Marketing from './Marketing'
import CategoriesSales from './CategoriesSales'
import ProjectCreated from './ProjectCreated'
import Budget from './Budget'
import OrderOverview from './OrderOverview'
import WeeklySales from './WeeklySales'
import TotalIncome from './TotalIncome'
import ActiveTask from './ActiveTask'
import OnlineOrders from './OnlineOrders'
import OfflineOrders from './OfflineOrders'

const GeneralWidgetsContainer = () => {
  return (
    <Container fluid className='general-widget'>
      <Row>
        <Marketing />
        <CategoriesSales />
        <ProjectCreated />
        <Budget />
        <OrderOverview />
        <WeeklySales />
        <TotalIncome />
        <ActiveTask />
        <OnlineOrders/>
        <OfflineOrders/>
      </Row>
    </Container>
  )
}

export default GeneralWidgetsContainer
