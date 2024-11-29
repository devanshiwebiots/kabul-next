import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DashboardCommonHeader from '../../Dashboards/Common/DashboardCommonHeader'
import { SaleOverview } from '@/Constant'
import ReactApexChart from 'react-apexcharts'
import { SalesOverviewChart } from '@/Data/Widgets/Charts'

const SalesOverview = () => {
    return (
        <Col xl={6} lg={12} className="box-col-6 xl-50">
            <Card>
                <DashboardCommonHeader title={SaleOverview} />
                <CardBody>
                    <div className="chart-container progress-chart">
                        <ReactApexChart options={SalesOverviewChart} series={SalesOverviewChart.series} type="area" height={335} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default SalesOverview
