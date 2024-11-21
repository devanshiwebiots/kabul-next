import React from 'react'
import { Container, Row } from 'reactstrap'
import Premium from './Premium'
import RevenueGrowth from './RevenueGrowth'
import ClearInvoicing from './ClearInvoicing'
import EventDetails from './EventDetails'
import SellingConnections from './SellingConnections'
import Information from './Information'
import DutiesToday from './DutiesToday'
import FreshUpgrade from './FreshUpgrade'
import SalesTrend from './SalesTrend'

const DefaultDashboard = () => {
    return (
        <Container className='dashboard_default' fluid>
            <Row>
                <Premium />
                <RevenueGrowth />
                <ClearInvoicing />
                <EventDetails />
                <SellingConnections />
                <Information />
                <DutiesToday />
                <FreshUpgrade />
                <SalesTrend />
            </Row>
        </Container>
    )
}

export default DefaultDashboard
