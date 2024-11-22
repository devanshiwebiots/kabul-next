import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DashboardCommonHeader from '../Common/DashboardCommonHeader'
import { ProjectDelivery } from '@/Constant'
import ReactApexChart from 'react-apexcharts'
import { ProjectDeliveryChart } from '@/Data/Dashboards/Charts'

const ProjectDeliveries = () => {
    return (
        <Col xl={7} lg={6} className="box-col-6">
            <Card>
                <DashboardCommonHeader title={ProjectDelivery} />
                <CardBody className="p-0">
                    <ReactApexChart options={ProjectDeliveryChart} series={ProjectDeliveryChart.series} type="area" height={307} />
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProjectDeliveries
