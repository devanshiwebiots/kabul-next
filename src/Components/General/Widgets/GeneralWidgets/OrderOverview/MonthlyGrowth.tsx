import CommonCardHeader from '@/CommonComponents/CommonCardHeader'
import DashboardCommonHeader from '@/Components/General/Dashboards/Common/DashboardCommonHeader'
import { Invoices, MonthlySale } from '@/Constant'
import { InvoicesChart, MonthlySaleChart } from '@/Data/Widgets/Charts'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col, Row } from 'reactstrap'

const MonthlyGrowth = () => {
    return (
        <Col md={5}>
            <Row>
                <Col xl={12} lg={12} md={12} sm={6}>
                    <Card className="monthly-chart">
                        <CommonCardHeader title={MonthlySale} />
                        <CardBody>
                            <div className="d-flex">
                                <div className="monthly">
                                    <h5>Growth</h5>
                                    <h3>$7,234</h3>
                                </div>
                                <div className='growth'>
                                    <ReactApexChart options={MonthlySaleChart} series={MonthlySaleChart.series} type="line" height={120} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={12} lg={12} md={12} sm={6}>
                    <Card className="monthly-chart invoices">
                        <DashboardCommonHeader title={Invoices} />
                        <CardBody className="pt-0">
                            <ReactApexChart options={InvoicesChart} series={InvoicesChart.series} type="line" height={70} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Col>
    )
}

export default MonthlyGrowth
