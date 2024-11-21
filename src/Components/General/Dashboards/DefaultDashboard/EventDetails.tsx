import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import DashboardCommonHeader from '../Common/DashboardCommonHeader'
import SVG from '@/CommonComponents/SVG'
import { Routes } from '@/Utils/Routes';
import Link from 'next/link';
import { EventDetailsData } from '@/Data/Dashboards/Default';
import { EventDetail } from '@/Constant';

const EventDetails = () => {
    return (
        <Col xl={5} md={6} className="box-col-6">
            <Card className="transaction-history">
                <DashboardCommonHeader title={EventDetail} />
                <CardBody>
                    <div className="table-responsive custom-scrollbar">
                        <Table className="display">
                            <tbody>
                                {EventDetailsData?.map((event, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="d-flex">
                                                <span className={`bg-light-${event.bgColor} history`}>
                                                    <SVG iconId={event.iconId} />
                                                </span>
                                                <div className="flex-grow-1 ms-2">
                                                    <Link href={Routes.ECommerce.ProductList}>
                                                        <h5>{event.title}</h5>
                                                        <span>{event.dateTime}</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{event.status}</td>
                                        <td>+ ${event.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Col>

    )
}

export default EventDetails
