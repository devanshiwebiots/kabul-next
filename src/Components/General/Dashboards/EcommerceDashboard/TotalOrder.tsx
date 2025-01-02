import React from 'react'
import { Button, Card, CardBody, Col, FormGroup, Input, Table } from 'reactstrap'
import DashboardCommonHeader from '../Common/DashboardCommonHeader'
import { ImagePath, TotalOrders } from '@/Constant'
import Image from 'next/image';
import { Routes } from '@/Utils/Routes';
import Link from 'next/link';
import { TotalOrderData } from '@/Data/Dashboards/Ecommerce';

const TotalOrder = () => {
    return (
        <Col xxl={5} lg={12} md={6} className="box-col-6">
            <Card>
                <DashboardCommonHeader title={TotalOrders} />
                <CardBody className="selling-table checkbox-checked">
                    <div className="table-responsive custom-scrollbar">
                        <Table id="sell-product">
                            <thead>
                                <tr>
                                    <th><FormGroup check><Input type="checkbox" /></FormGroup></th>
                                    <th>Product Name</th>
                                    <th>Order Id</th>
                                    <th>Stock</th>
                                    <th>Amount </th>
                                    <th>Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {TotalOrderData?.map((order, index) => (
                                    <tr key={index}>
                                        <td><FormGroup check><Input type="checkbox" /></FormGroup></td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="flex-shrink-0">
                                                    <Image src={`${ImagePath}/dashboard-2/order/${order.image}.png`} alt={order.name} width={30} height={30} priority/>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <Link href={Routes.ECommerce.Product}>
                                                        <h5 className="f-w-600">{order.name}</h5>
                                                        <span>{order.date}</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                        <td>#{order.orderId}</td>
                                        <td>{order.customerId}</td>
                                        <td>${order.price}</td>
                                        <td><Button color={order.statusClass} className={`bg-${order.statusClass}`}>Pending</Button></td>
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

export default TotalOrder
