import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DashboardCommonHeader from '../Common/DashboardCommonHeader'
import { Rating } from '@/Constant'
import { RatingData } from '@/Data/Dashboards/Ecommerce'

const OverAllRating = () => {

    const renderStars = () =>
        [...Array(5)].map((_, index) => (
            <i className="fa fa-star font-warning" key={index} />
        ));

    return (
        <Col xxl={4} xl={12} sm={12} md={6} className="box-col-6">
            <Card>
                <DashboardCommonHeader title={Rating} />
                <CardBody className="pt-0">
                    <div className="over-rating">
                        <p>A credit rating is a rating of a prospective debtor's credit risk, expecting their ability to repay the debt.</p>
                        <div className="d-xxl-flex align-items-center">
                            <div className="over-all">
                                <h3>4.6</h3><span className="d-block">{renderStars()}</span>
                                <p>A sovereign credit rating refers to the creditworthiness of a sovereign body, such as the national government.</p>
                            </div>
                            <div className="rating-box d-xxl-block d-none">
                                {RatingData?.map((rating, index) => (
                                    <div className="d-flex gap-2" key={index}>
                                        <div className="flex-shrink-0">
                                            <h3>{rating.score}</h3>
                                        </div>
                                        <div className="flex-grow-1">
                                            <span className="d-flex">{renderStars()}</span>
                                        </div>
                                        <p>{rating.percentage}%</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default OverAllRating
