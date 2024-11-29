import { MonthHistory, ProjectCreate } from '@/Constant'
import { OtherChartsData } from '@/Data/Widgets'
import { MonthlyHistoryChart, ProjectCreatedChart } from '@/Data/Widgets/Charts'
import { Row } from 'reactstrap'
import ChartWithHeader from '../Common/ChartWithHeader'
import SalesOverview from './SalesOverview'

const OtherCharts = () => {
    return (
        <Row>
            <ChartWithHeader colSize={{ xl: 6, lg: 12 }} additionalClasses="box-col-6 xl-50" title={ProjectCreate} chart={ProjectCreatedChart} type="area" height={335} />
            <SalesOverview />
            <ChartWithHeader colSize={{ md: 12 }} additionalClasses="box-col-12" title={MonthHistory} chart={MonthlyHistoryChart} type="bar" height={380} />
            <Row>
                {OtherChartsData?.map((item, index) => (
                    <ChartWithHeader {...item} index={index} key={index} />
                ))}
            </Row>
        </Row>
    )
}

export default OtherCharts
