import CommonDropdown from '@/CommonComponents/CommonDropdown'
import SVG from '@/CommonComponents/SVG'
import { ImagePath } from '@/Constant'
import { MarketingData } from '@/Data/Widgets'
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, Col, Progress } from 'reactstrap'

const Marketing = () => {
    return (
        <>
            {MarketingData?.map((item, index) => (
                <Col xl={4} lg={4} sm={6} key={index}>
                    <Card className="web-card">
                        <CardBody>
                            <div className={`d-flex ${item.class}`}>
                                <div className="header-top">
                                    <div className={`mobile-app bg-light-${item.color}`}> <SVG iconId={item.iconId} /></div>
                                    <div className="flex-grow-1">
                                        <h4>{item.title}</h4>
                                        <span>{item.subtitle}</span>
                                    </div>
                                </div>
                                <CommonDropdown />
                            </div>
                            <div className="comment">
                                <ul>
                                    <li><SVG iconId="calendar" /><span>{item.date}</span></li>
                                    <li><SVG iconId="message" /><span>{item.messageCount}</span></li>
                                    <li><SVG iconId="link" /><span>{item.linkCount}</span></li>
                                </ul>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="user-details customers">
                                    <ul>
                                        {item?.users?.map((user, userIndex) => (
                                            <li className="d-inline-block" key={userIndex}>
                                                <Image width={42} height={42} priority src={`${ImagePath}/widgets/user/${user}.png`} alt="logo" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="progress-value">
                                    <span>Progress<span>{item.progress}%</span></span>
                                    <Progress value={item.progress} color={item.color} className={`bg-light-${item.color}`} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}

export default Marketing
