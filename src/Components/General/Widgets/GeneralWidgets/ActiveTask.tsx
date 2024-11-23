import React from 'react'
import { Card, CardBody, Col, FormGroup, Input } from 'reactstrap'
import DashboardCommonHeader from '../../Dashboards/Common/DashboardCommonHeader'
import { ActiveTasks, Href } from '@/Constant'
import Link from 'next/link'
import { Routes } from '@/Utils/Routes'
import SVG from '@/CommonComponents/SVG'
import { ActiveTasksData } from '@/Data/Widgets/General'

const ActiveTask = () => {

    return (
        <Col xl={4} md={6} className="col-xl-40 box-col-4">
            <Card>
                <DashboardCommonHeader title={ActiveTasks} />
                <CardBody className="active-task">
                    <ul>
                        {ActiveTasksData?.map((task, index) => (
                            <li key={index} className="d-flex">
                                <div className="flex-shrink-0">
                                    <FormGroup check><Input type="checkbox" /></FormGroup>
                                </div>
                                <div className="flex-grow-1">
                                    <Link href={Routes.ToDo}>
                                        <h5>{task.name}</h5>
                                    </Link>
                                    <p>{task.description}</p>
                                </div>
                                <span className="delete-option">
                                    <Link href={Href}>
                                        <SVG iconId="Delete" />
                                    </Link>
                                </span>
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ActiveTask
