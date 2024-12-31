import { ArticleVideoProps } from '@/Types/Faq';
import { Col, Row, Card, CardBody } from 'reactstrap';

const CommonArticleVideo: React.FC<ArticleVideoProps> = ({ data, icon }) => {
    return (
        <Col xl={4} md={6}>
            <Row className="latest-articles">
                {data?.map((item, index) => (
                    <Col sm={12} key={index}>
                        <Card>
                            <CardBody>
                                <div className="d-flex articles-icons">
                                    {icon}
                                    <div className="flex-grow-1">
                                        <h5 className="f-w-600">{item.title}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    )
}

export default CommonArticleVideo
