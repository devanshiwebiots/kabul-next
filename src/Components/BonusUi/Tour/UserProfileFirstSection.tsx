import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonTourHeader from './Common/CommonTourHeader'
import CommonTourFooter from './Common/CommonTourFooter'
import { Href, ImagePath } from '@/Constant'
import Link from 'next/link'
import RatioImage from '@/CommonComponents/RatioImage'
import { Routes } from '@/Utils/Routes'
import CommonTourSocialMedia from './Common/CommonTourSocialMedia'

const UserProfileFirstSection = () => {
    return (
        <Col sm={12} >
            <Card className='step5'>
                <div className="profile-img-style">
                    <Row className="g-2">
                        <CommonTourHeader date="25 Jan" time="6 min read" />
                        <Col sm={4} className="align-self-center mt-0 text-end">
                            <CommonTourSocialMedia time="3 min ago" className='step6' />
                        </Col>
                    </Row>
                    <hr />
                    <h3 className="pb-3">Wonderful piece that successfully conveys the magnificence of the mountains and the natural world.</h3>
                    <p className="block-ellipsis">English Romantic painter, printer, and watercolourist <em className="txt-danger">William C. Jennings</em> Is most renowned for his expressive colorization, creative landscapes, and stormy, sometimes violent maritime works. However, this moody image of the Devil's Bridge in Switzerland, close to the Gotthard Pass, feels incredibly authentic and accurately depicts historical occasions when Russian general Suvorov crossed the Alps and fought not only far larger enemy troops!</p>
                    <div className="img-container">
                        <div id="aniimated-thumbnials">
                            <Link href={Href}><RatioImage className="img-fluid rounded" src={`${ImagePath}/other-images/profile-style-img3.png`} alt="gallery" /></Link>
                            <p className="block-ellipsis pt-3">The curved canvas is enclosed in a complex frame that the artist created but that his buddy Gottlieb Christian Kuhn carved. A variety of Christian symbols are depicted on the frame, including the faces of five infant angels, a star, grapes, vines, corn, and God's eye.Many of the Romantic elements and subjects that he would explore throughout his career are present in this work, one of his earliest, most notable of which is the landscape's significant significance. In spite of the altarpiece's inclusion of a crucifix, the emphasis is<Link className="txt-danger" href={Routes.Users.UserProfile} target="_blank"> Read More</Link></p>
                        </div>
                    </div>
                    <CommonTourFooter/>
                </div>
            </Card>
        </Col>
    )
}

export default UserProfileFirstSection

