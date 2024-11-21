"use client"
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DashboardCommonHeader from '../Common/DashboardCommonHeader'
import Image from 'next/image'
import { ImagePath } from '@/Constant'

const Sales = () => {
    return (
        <Col xl={3} sm={6}>
            <Card>
                <div className='daily-revenue-card'>
                    <DashboardCommonHeader title="Total Sells" />
                </div>
                <CardBody className="pb-0 total-sells">
                    <div className="d-flex align-items-center gap-3">
                        <div className="flex-shrink-0">
                            <Image src={`${ImagePath}/dashboard-2/icon/coin1.png`} alt="coin" width={28} height={28} />
                        </div>
                        <div className="flex-grow-1">
                            <div className="d-flex align-items-center gap-2">
                                <h2>12,463</h2>
                                <div className="d-flex total-icon">
                                    <p className="mb-0 up-arrow bg-light-success"><i className="fa fa-arrow-up text-success" /></p><span className="f-w-500 font-success">+ 20.08% </span>
                                </div>
                            </div>
                            <p className="text-truncate">Compared to Jan 2023</p>
                        </div>
                    </div>
                     //chart
                </CardBody>
            </Card>
        </Col>

    )
}

export default Sales
