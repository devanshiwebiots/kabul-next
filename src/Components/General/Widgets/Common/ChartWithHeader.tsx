import CommonCardHeader from '@/CommonComponents/CommonCardHeader'
import { ChartWithHeaderProps } from '@/Types/Widgets'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'

const ChartWithHeader: React.FC<ChartWithHeaderProps> = ({ index, colSize, additionalClasses = '', title, chart, type, height }) => {
    return (
        <Col key={index} {...colSize} className={additionalClasses}>
            <Card>
                <CommonCardHeader title={title} />
                <CardBody>
                    <div className="chart-container">
                        <ReactApexChart options={chart} series={chart.series} type={type} height={height} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ChartWithHeader
