import SVG from '@/CommonComponents/SVG'
import { OnlineOrdersChart } from '@/Data/Widgets/Charts'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'

const OnlineOrders = () => {
    return (
        <Col xl={2} sm={6} className="col-xl-30 box-col-4">
            <Card className="online-order">
                <CardHeader className="pb-0">
                    <div className="d-flex">
                        <div className="order bg-light-primary"><span />
                            <SVG iconId="basket" />
                        </div>
                        <div className="arrow-chart">
                            <SVG iconId="arrow-chart" />
                            <span className="font-danger">-6.3%</span>
                        </div>
                    </div>
                    <div className="online"><span>Online Order</span>
                        <h2>16,2873</h2>
                    </div>
                </CardHeader>
                <CardBody className="pt-0 ps-2 pe-2">
                    <ReactApexChart options={OnlineOrdersChart} series={OnlineOrdersChart.series} type="bar" height={130} />
                </CardBody>
            </Card>
        </Col>
    )
}

export default OnlineOrders
