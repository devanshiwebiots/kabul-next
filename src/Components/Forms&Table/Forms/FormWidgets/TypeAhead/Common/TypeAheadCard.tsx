import CommonCardHeader from '@/CommonComponents/CommonCardHeader';
import { TypeAheadCardProps } from '@/Types/Forms';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Card, CardBody, Col, Form } from 'reactstrap';

const TypeAheadCard: React.FC<TypeAheadCardProps> = ({ title, span, id, options, placeholder, multiple, align }) => {

    return (
        <Col sm={12} md={6}>
            <Card>
                <CommonCardHeader title={title} span={span} />
                <CardBody>
                    <div id={id}>
                        <Form className="theme-form">
                            <div>
                                <Typeahead
                                    id={id}
                                    options={options}
                                    placeholder={placeholder}
                                    multiple={multiple}
                                    align={align ? 'right' : undefined}
                                    labelKey={multiple ? "name" : undefined}
                                />
                            </div>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default TypeAheadCard
