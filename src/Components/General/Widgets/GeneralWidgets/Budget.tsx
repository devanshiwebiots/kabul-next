import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DashboardCommonHeader from '../../Dashboards/Common/DashboardCommonHeader'
import { BudgetHeader } from '@/Constant'
import ReactApexChart from 'react-apexcharts'
import { BudgetChart } from '@/Data/Widgets/Charts'
import Link from 'next/link'
import { Routes } from '@/Utils/Routes'
import SVG from '@/CommonComponents/SVG'
import { BudgetData } from '@/Data/Widgets/General'

const Budget = () => {
    return (
        <Col xl={3} lg={4} md={12} className="col-xl-40 box-col-4">
            <Card className="budget-card">
                <DashboardCommonHeader title={BudgetHeader} />
                <CardBody className="pb-0">
                    <div className="budget-spent"><span>Budget Spent</span>
                        <h2>$ 65,847.00</h2>
                    </div>
                    {BudgetData?.map((item, index) => (
                        <Link href={Routes.Learning.LearningList} key={index}>
                            <div className="d-flex">
                                <div className={`design-score bg-light-${item.color}`}>
                                    <SVG iconId={item.icon} />
                                </div>
                                <div className="flex-grow-1">
                                    <h6>{item.title}</h6>
                                    <span>$ {item.amount}</span>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="design-menu">
                                        <i className="fa fa-angle-right" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </CardBody>
                <CardBody className="p-0">
                    <div className='budget-chart'>
                        <ReactApexChart options={BudgetChart} series={BudgetChart.series} type="area" height={120} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Budget
