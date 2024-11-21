import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DashboardCommonHeader from '../Common/DashboardCommonHeader'
import { UpgradeFresh } from '@/Constant'
import { FreshUpgradeData } from '@/Data/Dashboards/Default'

const FreshUpgrade = () => {
    return (
        <Col xxl={4} lg={6} className="box-col-6">
            <Card className="notification main-timeline">
                <DashboardCommonHeader title={UpgradeFresh} />
                <CardBody>
                    <div className="dark-timeline">
                        <ul>
                            {FreshUpgradeData?.map((item, index) => (
                                <li key={index + 1} className="d-flex">
                                    <div className={`activity-dot-${item.dotClass}`} />
                                    <div className="flex-grow-1">
                                        <span className="f-w-600 d-block">{item.title}</span>
                                        <p className="mb-0">{item.description}</p>
                                    </div>
                                    {item.iconClass && <i className={`fa fa-circle circle-dot-${item.iconClass}`} />}
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default FreshUpgrade
