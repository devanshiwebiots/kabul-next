import CommonCardHeader from '@/CommonComponents/CommonCardHeader'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'

interface ChartComponentProps {
    index?: number;
    colSize: Partial<Record<string, number>>;
    additionalClasses?: string;
    title: string;
    chart: ApexCharts.ApexOptions
    type: 'line' | 'area' | 'bar' | 'radar' | 'bubble' | 'donut';
    height: number;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ index, colSize, additionalClasses = '', title, chart, type, height }) => {
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

export default ChartComponent
