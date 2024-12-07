import { Button, Col } from 'reactstrap'

const Invoice6Buttons = () => {
    return (
        <Col sm={12} className="text-center mt-3">
            <Button color="primary" className="me-2">Print</Button>
            <Button>Cancel</Button>
        </Col>
    )
}

export default Invoice6Buttons
