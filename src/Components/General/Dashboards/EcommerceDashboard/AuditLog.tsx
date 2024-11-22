import React from 'react'
import DashboardCommonHeader from '../Common/DashboardCommonHeader'
import { Audit } from '@/Constant'
import { Card, CardBody, Col } from 'reactstrap'
import Link from 'next/link';
import { Routes } from '@/Utils/Routes';
import { AuditLogData } from '@/Data/Dashboards/Ecommerce';

const AuditLog = () => {
    return (
        <Col xl={5} lg={12} className="box-col-6 pre-order">
            <Card>
                <DashboardCommonHeader title={Audit} />
                <CardBody className="py-0">
                    <ul className="message-box custom-scrollbar">
                        {AuditLogData?.map((item, index) => (
                            <li key={index} className={item.className}>
                                <div className="d-flex">
                                    <div className={`flex-shrink-0 bg-${item.statusClass}`}>
                                        <i className={`fa fa-${item.iconClass}-circle`} />
                                    </div>
                                    <div className="flex-grow-1">
                                        <Link href={Routes.Task}>
                                            <h5>{item.taskTitle}</h5>
                                            <p>{item.assignee}</p>
                                        </Link>
                                    </div>
                                    <span>{item.time}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </Col>
    )
}

export default AuditLog
