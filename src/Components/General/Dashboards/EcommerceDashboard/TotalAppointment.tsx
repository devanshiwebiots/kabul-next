import React from 'react'
import { Button, Card, CardBody, Col, Table } from 'reactstrap'
import DashboardCommonHeader from '../Common/DashboardCommonHeader'
import { ImagePath, TotalAppointments } from '@/Constant'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Routes } from '@/Utils/Routes';
import { TotalAppointmentData } from '@/Data/Dashboards/Ecommerce';

const TotalAppointment = () => {
    const router = useRouter()

    return (
        <Col xxl={4} xl={6} md={6} className="box-col-6">
            <Card className="appointment-detail">
                <DashboardCommonHeader title={TotalAppointments} />
                <CardBody>
                    <div className="table-responsive custom-scrollbar">
                        <Table>
                            <tbody>
                                {TotalAppointmentData?.map((user, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="d-flex">
                                                <Image className="img-fluid align-top circle" src={`${ImagePath}/dashboard-2/user/${index + 1}.png`} alt={user.name} width={42} height={42} />
                                                <div className="flex-grow-1 text-truncate">
                                                    <Link href={Routes.Users.UserProfile}><span>{user.name}</span></Link>
                                                    <p className="mb-0">{user.statusTime}</p>
                                                </div>
                                                <div className={`active-status active-${user.statusClass}`} />
                                            </div>
                                        </td>
                                        <td className="text-truncate">{user.date}</td>
                                        <td className="text-end">
                                            <Button color={user.btnColor} onClick={() => router.push(Routes.Users.UserCards)}>{user.buttonText} {user.icon && <i className={user.icon}></i>}</Button>
                                        </td>
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

export default TotalAppointment
