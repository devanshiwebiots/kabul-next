import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import ReactApexChart from "react-apexcharts";
import { RevenueGrowthChart } from '@/Data/Dashboards/Charts';

const RevenueGrowth = () => {
    return (
        <Col xl={6} md={6}>
            <Card className="monthly-growth">
                <CardHeader className="card-no-border pb-0">
                    <h4>Weekly Revenue growth</h4>
                </CardHeader>
                <CardBody className="pt-0">
                    <ReactApexChart options={RevenueGrowthChart} series={RevenueGrowthChart.series} type="bar" height="260" />
                    <ul className="d-flex">
                        <li>
                            <div className="d-flex">
                                <div className="flex-grow-1">
                                    <h3>$ 4,485</h3><span>Current User</span>
                                </div>
                                <div className="flex-shrink-0">
                                    <h4>1,00,00</h4><span>45% goal reached</span>
                                </div>
                            </div>
                            <div className="progress">
                            </div>
                        </li>
                        <li>
                            <div className="d-flex">
                                <div className="flex-grow-1">
                                    <h3>$ 9,660</h3><span>Net Tax</span>
                                </div>
                                <div className="flex-shrink-0">
                                    <h4>1,00,00</h4><span>85% goal reached</span>
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '70%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </li>
                    </ul>
                </CardBody>
            </Card>
        </Col>

    )
}

export default RevenueGrowth
