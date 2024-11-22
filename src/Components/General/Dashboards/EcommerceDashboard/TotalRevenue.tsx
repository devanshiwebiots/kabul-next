import CommonCardHeader from '@/CommonComponents/CommonCardHeader'
import { Revenue } from '@/Constant'
import { IncreaseRevenueChart, TotalRevenueChart } from '@/Data/Dashboards/Charts'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'

const TotalRevenue = () => {
    return (
        <Col xxl={7} lg={12} className="box-col-12">
            <Card className="total-revenue">
                <CommonCardHeader title={Revenue} />
                <CardBody className="p-0">
                    <Row className="gy-5">
                        <Col lg={9} md={8}>
                            <div className="revenue-legend">
                                <ul>
                                    <li className="me-3">
                                        <div className="circle bg-primary me-1"> </div><span>Earning</span>
                                    </li>
                                    <li>
                                        <div className="circle bg-secondary me-1" /><span>Expense </span>
                                    </li>
                                </ul>
                            </div>
                            <ReactApexChart options={TotalRevenueChart} series={TotalRevenueChart.series} type="bar" height={323} />
                        </Col>
                        <Col xl={3} lg={3} md={4} className="increase ps-0">
                            <div className="d-flex pe-3"><span className="me-2">Year:</span><span>2024<i className="fa fa-caret-down ms-2" /></span></div>
                            <div className="total-increase">
                                <h2>$25,837</h2><span>Total : 23,000</span>
                            </div>
                            <ReactApexChart options={IncreaseRevenueChart} series={IncreaseRevenueChart.series} type="area" height={158} />
                            <Button color="primary">Increase</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>

    )
}

export default TotalRevenue
