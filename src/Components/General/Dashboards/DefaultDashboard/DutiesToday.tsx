import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DashboardCommonHeader from '../Common/DashboardCommonHeader'
import { ImagePath, TodayDuties } from '@/Constant'
import CommonDropdown from '@/CommonComponents/CommonDropdown';
import RatioImage from '@/CommonComponents/RatioImage';
import Image from 'next/image';
import { DutiesTodayData } from '@/Data/Dashboards/Default';
import Link from 'next/link';
import { Routes } from '@/Utils/Routes';

const DutiesToday = () => {
    return (
        <Col xl={3} md={6} className="box-col-6">
            <Card className="duties-hed">
                <DashboardCommonHeader title={TodayDuties} />
                <CardBody>
                    <ul className="task-box">
                        {DutiesTodayData?.map((item, index) => (
                            <li key={index} className="bg-light">
                                <div className="d-flex align-items-center justify-content-between task-heading">
                                    <h6 className={`font-${item.fontClass} f-w-500`}>{item.title}</h6>
                                    <CommonDropdown />
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="flex-shrink-0">
                                        {item.images ? (
                                            <div className="customers social-group">
                                                <ul>
                                                    {item.images.map((image, index) => (
                                                        <li key={index} className="d-inline-block">
                                                            <RatioImage className="rounded-circle border-0" src={`${ImagePath}/dashboard/user/${image}.png`} alt="user" />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>) : (<Image src={`${ImagePath}/dashboard/user/${item.image}.png`} alt="" width={40} height={40} />)}
                                    </div>
                                    <div className="flex-grow-1"><p className="mb-0">Assigned to</p><Link href={Routes.ECommerce.ProductPage}><h5>{item.name}</h5></Link></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DutiesToday
