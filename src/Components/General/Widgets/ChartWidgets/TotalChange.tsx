import { TotalProductChart, TotalProjectChart, TotalSalesChart } from '@/Data/Widgets/Charts'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, Col, Row } from 'reactstrap'

const chartData = [
    {
        title: "Total Sale",
        value: "$3654.00",
        comparison: "Compare to last month",
        chartType: "area" as "area",
        chartOptions: TotalSalesChart,
        chartHeight: 200,
    },
    {
        title: "Total Project",
        value: "12569",
        comparison: "Compare to last month",
        chartType: "bar" as "bar",
        chartOptions: TotalProjectChart,
        chartHeight: 215,
    },
    {
        title: "Total Product",
        value: "93M",
        comparison: "Compare to last month",
        chartType: "area" as "area",
        chartOptions: TotalProductChart,
        chartHeight: 200,
    },
];

const TotalChange = () => {
    return (
        <Row>
            {chartData.map((data, index) => (
                <Col lg={4} md={12} className="box-col-4" key={index}>
                    <Card className="o-hidden">
                        <div className="chart-widget-top">
                            <Row className="card-body pb-0 m-0">
                                <Col xl={9} lg={8} className="col-9 p-0">
                                    <h4 className="mb-2">{data.title}</h4>
                                    <h4>{data.value}</h4><span>{data.comparison}</span>
                                </Col>
                                <Col xl={3} lg={4} className="col-3 text-end p-0">
                                    <h6 className="txt-success">+65%</h6>
                                </Col>
                            </Row>
                            <ReactApexChart options={data.chartOptions} series={data.chartOptions.series} type={data.chartType} height={data.chartHeight} />
                        </div>
                    </Card>
                </Col>
            ))}
            <Col lg={4} md={12} className="box-col-4">
                <Card className="o-hidden">
                    <div className="chart-widget-top">
                        <Row className="card-body pb-0 m-0">
                            <Col xl={9} lg={8} className="col-9 p-0">
                                <h4 className="mb-2">Total Sale</h4>
                                <h4>$3654.00</h4><span>Compare to last month</span>
                            </Col>
                            <Col xl={3} lg={4} className="col-3 text-end p-0">
                                <h6 className="txt-success">+65%</h6>
                            </Col>
                        </Row>
                        <div>
                            <ReactApexChart options={TotalSalesChart} series={TotalSalesChart.series} type="area" height={200} />
                        </div>
                    </div>
                </Card>
            </Col>
            <Col lg={4} md={12} className="box-col-4">
                <Card className="o-hidden">
                    <div className="chart-widget-top">
                        <Row className="card-body pb-0 m-0">
                            <Col xl={9} lg={8} className="col-9 p-0">
                                <h4 className="mb-2">Total Project</h4>
                                <h4>12569</h4><span>Compare to last month</span>
                            </Col>
                            <Col xl={3} lg={4} className="col-3 text-end p-0">
                                <h6 className="txt-success">+65%</h6>
                            </Col>
                        </Row>
                        <ReactApexChart options={TotalProjectChart} series={TotalProjectChart.series} type="bar" height={215} />
                    </div>
                </Card>
            </Col>
            <Col lg={4} md={12} className="box-col-4">
                <Card className="o-hidden">
                    <div className="chart-widget-top">
                        <Row className="card-body pb-0 m-0">
                            <Col xl={9} lg={8} className="col-9 p-0">
                                <h4 className="mb-2">Total Product</h4>
                                <h4>93M</h4><span>Compare to last month</span>
                            </Col>
                            <Col xl={3} lg={4} className="col-3 text-end p-0">
                                <h6 className="txt-success">+65%</h6>
                            </Col>
                        </Row>
                        <ReactApexChart options={TotalProductChart} series={TotalProductChart.series} type="area" height={200} />
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

export default TotalChange
