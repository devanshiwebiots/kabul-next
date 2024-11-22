import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DashboardCommonHeader from '../Common/DashboardCommonHeader'
import { SaleTrend } from '@/Constant'
import ReactApexChart from 'react-apexcharts'
import { SalesTrendChart } from '@/Data/Dashboards/Charts'

const SalesTrend = () => {
    return (
        <Col xxl={8} lg={6} className="box-col-12">
            <Card className="user-chat">
                <DashboardCommonHeader title={SaleTrend} />
                <CardBody>
                    <ReactApexChart options={SalesTrendChart} series={SalesTrendChart.series} type="line" height={292} />
                </CardBody>
            </Card>
        </Col>
    )
}

export default SalesTrend
