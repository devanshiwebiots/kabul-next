import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'

const Premium = () => {
    return (
        <Col xl={6} md={6}>
            <Card className="profile-greeting">
                <CardBody>
                    <div className="clock"><i className="fa fa-clock-o" /><span>12:30 PM</span></div>
                    <div className="card_content">
                        <h2>Get Thousands Premium Courses.</h2>
                        <p>Access thousands of premium courses in various fields. Enhance your skills and knowledge with top-quality content from industry experts. </p>
                    </div>
                    <Button color="primary">Go Premium</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Premium
