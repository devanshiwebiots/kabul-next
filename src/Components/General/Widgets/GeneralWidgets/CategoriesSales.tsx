import CommonDropdown from '@/CommonComponents/CommonDropdown'
import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { CategoriesEarnedChart, CategoriesSalesChart } from '@/Data/Widgets/Charts'
import { CategoriesBySales } from '@/Constant'
import { CategoriesSalesData } from '@/Data/Widgets/General'

const CategoriesSales = () => {
    return (
        <Col sm={6} xl={3} className="col-xl-50 box-col-6">
            <Card className="categories-chart">
                <CardHeader className="pb-0">
                    <div className="header-top">
                        <h4>{CategoriesBySales}</h4>
                        <CommonDropdown />
                    </div>
                    <Row className="mt-2">
                        <div className="col-6 p-0">
                            <ReactApexChart options={CategoriesSalesChart} series={CategoriesSalesChart.series} type="donut" height={200} />
                        </div>
                        <div className="col-6 categories-sales">
                            {CategoriesSalesData?.map((item, index) => (
                                <div key={index} className="d-flex gap-2">
                                    <div className="flex-shrink-0"><span className={`bg-${item.color}`}></span></div>
                                    <div className="flex-grow-1"><h6>{item.label}</h6></div>
                                    <h5>${item.value}</h5>
                                </div>
                            ))}
                        </div>
                    </Row>
                </CardHeader>
                <CardBody className="p-0">
                    <div className="total-earn">
                        <h2>$3,512,201</h2>
                        <h6>Total Earned</h6>
                    </div>
                    <div className='earned'>
                        <ReactApexChart options={CategoriesEarnedChart} series={CategoriesEarnedChart.series} type="area" height={200} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CategoriesSales
