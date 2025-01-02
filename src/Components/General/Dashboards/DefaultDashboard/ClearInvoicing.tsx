import CommonCardHeader from '@/CommonComponents/CommonCardHeader'
import CommonDropdown from '@/CommonComponents/CommonDropdown';
import { ImagePath } from '@/Constant';
import { ClearInvoicingData } from '@/Data/Dashboards/Default';
import { Routes } from '@/Utils/Routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button, Card, CardBody, Col, FormGroup, Input, Table } from 'reactstrap'
import { ClearInvoice } from '@/Constant';

const ClearInvoicing = () => {
    return (
        <Col xl={7} md={12} className="box-col-6">
            <Card>
                <CommonCardHeader title={ClearInvoice} />
                <CardBody className="open-invoice">
                    <div className="table-responsive custom-scrollbar">
                        <Table className="display" id="invoice">
                            <thead>
                                <tr>
                                    <th><FormGroup check><Input type="checkbox" /></FormGroup></th>
                                    <th>Invoice</th>
                                    <th>Customer</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                    <th>Due Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {ClearInvoicingData?.map((invoice, index) => (
                                    <tr key={index}>
                                        <td> <FormGroup check><Input type="checkbox" /></FormGroup>
                                        </td>
                                        <td>{invoice.id}</td>
                                        <td>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <Image src={`${ImagePath}/dashboard-2/user/${index + 1}.png`} alt="" width={40} height={40} priority/>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <Link href={Routes.ECommerce.ProductList}>
                                                        <h5>{invoice.userName}</h5>
                                                        <span>{invoice.userEmail}</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <Button color={invoice.statusClass} >{invoice.status}</Button>
                                        </td>
                                        <td>${invoice.amount}</td>
                                        <td>{invoice.dueDate}</td>
                                        <td><CommonDropdown /></td>
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

export default ClearInvoicing
