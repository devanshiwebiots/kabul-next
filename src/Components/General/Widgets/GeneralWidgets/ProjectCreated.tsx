import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DashboardCommonHeader from '../../Dashboards/Common/DashboardCommonHeader'
import { ProjectCreate } from '@/Constant'
import ReactApexChart from 'react-apexcharts'
import { ProjectCreatedChart } from '@/Data/Widgets/Charts'

const ProjectCreated = () => {
    return (
        <Col xl={6} lg={6}>
            <Card>
                <DashboardCommonHeader title={ProjectCreate} />
                <CardBody className="p-0">
                    <ReactApexChart options={ProjectCreatedChart} series={ProjectCreatedChart.series} type="area" height={335} />
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProjectCreated
