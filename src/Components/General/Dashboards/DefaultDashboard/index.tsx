import React from 'react'
import { Container, Row } from 'reactstrap'
import Premium from './Premium'
import RevenueGrowth from './RevenueGrowth'

const DefaultDashboard = () => {
    return (
        <Container className='dashboard_default' fluid>
            <Row>
                <Premium />
                <RevenueGrowth />
            </Row>
        </Container>
    )
}

export default DefaultDashboard
