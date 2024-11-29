import React from 'react'
import { Row } from 'reactstrap'
import ChartWithHeader from '../Common/ChartWithHeader'
import { MonthHistory, ProjectCreate } from '@/Constant'
import { MonthlyHistoryChart, ProjectCreatedChart } from '@/Data/Widgets/Charts'
import SalesOverview from './SalesOverview'
import { OtherChartsData, SmallWidgetsData } from '@/Data/Widgets'

const OtherCharts = () => {
    return (
        <Row>
            <ChartWithHeader colSize={{ xl: 6, lg: 12 }} additionalClasses="box-col-6 xl-50" title={ProjectCreate} chart={ProjectCreatedChart} type="area" height={335} />
            <SalesOverview />
            <ChartWithHeader colSize={{ md: 12 }} additionalClasses="box-col-12" title={MonthHistory} chart={MonthlyHistoryChart} type="bar" height={380} />
            <Row>
                {SmallWidgetsData?.map((item, index) => (
                    <ChartWithHeader {...item} index={index} key={index} />
                ))}
            </Row>
            <Row>
                {OtherChartsData?.map((item, index) => (
                    <ChartWithHeader {...item} index={index} key={index} />
                ))}
            </Row>
        </Row>
    )
}

export default OtherCharts
