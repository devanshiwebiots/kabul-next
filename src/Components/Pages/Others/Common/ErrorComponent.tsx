import { BackToHomePage } from "@/Constant";
import { Routes } from "@/Utils/Routes";
import { Button, Col, Container } from "reactstrap";

const ErrorComponent: React.FC<{ title: string; SvgComponent: any }> = ({ title, SvgComponent }) => {

    return (
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
            <div className="error-wrapper">
                <Container>
                    <div className="svg-wrraper">
                        <SvgComponent />
                    </div>
                    <Col md={8} className="offset-md-2">
                        <h3>{title}</h3>
                        <p className="sub-content">The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.</p>
                        <Button tag="a" color="primary" href={Routes.Dashboard.DefaultDashboard}>{BackToHomePage}</Button>
                    </Col>
                </Container>
            </div>
        </div>
    );
}

export default ErrorComponent
