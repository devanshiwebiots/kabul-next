import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DashboardCommonHeader from '../Common/DashboardCommonHeader'
import { SellingConnection } from '@/Constant'
import ReactApexChart from 'react-apexcharts'
import { SellingConnectionsChart } from '@/Data/Dashboards/Charts'

const SellingConnections = () => {
    return (
        <Col xl={5} md={6} className="box-col-6">
            <Card>
                <DashboardCommonHeader title={SellingConnection} />
                <CardBody className="pb-0">
                    <div className="product-heading">
                        <h3>4629 Views<span>( Your selling item connections )</span></h3>
                    </div>
                    <ReactApexChart options={SellingConnectionsChart} series={SellingConnectionsChart.series} type="area" height={340} />
                </CardBody>
            </Card>
        </Col>
    )
}

export default SellingConnections
