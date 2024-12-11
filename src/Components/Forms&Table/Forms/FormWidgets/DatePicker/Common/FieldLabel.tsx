import { Col, Label } from "reactstrap"

const FieldLabel: React.FC<{ text: string }> = ({ text }) => {
    return (
        <Col xxl={3} className="box-col-12">
            <Label className="box-col-12 text-start" check>{text}</Label>
        </Col>
    )
}

export default FieldLabel
