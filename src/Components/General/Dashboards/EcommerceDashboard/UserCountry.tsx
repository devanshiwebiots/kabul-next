import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DashboardCommonHeader from '../Common/DashboardCommonHeader'
import { Country } from '@/Constant'
import SVG from '@/CommonComponents/SVG'
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";

const UserCountry = () => {

    return (
        <Col xxl={4} xl={6} lg={6} md={6} className="box-col-6">
            <Card className="user-country">
                <DashboardCommonHeader title={Country} />
                <CardBody>
                    <div className="d-flex">
                        <h2 className="me-2">216.459</h2>
                        <span className="bg-light-success"><SVG iconId="up-arrow" /></span>
                        <h6 className="font-success">+ 5.09%</h6>
                    </div>
                    <span>Increase than last month</span>
                    <div className="jvector-map-height" id="world-map2">
                        <VectorMap
                            map={worldMill}
                            backgroundColor='transparent'
                            zoomOnScroll={true}
                            regionStyle={{
                                initial: {
                                    fill: "#678f4433",
                                },
                            }}
                        />                        
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default UserCountry
