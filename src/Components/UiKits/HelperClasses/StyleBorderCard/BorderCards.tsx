import { BorderColor, BorderWidth, CustomBorderRadiusClass } from "@/Constant";
import { BorderColorData } from "@/Data/UiKits/HelperClasses";
import { Col } from "reactstrap";

const BorderCards = () => {
    return (
        <>
            <Col xxl={3} sm={6}>
                <div className="border-wrapper h-100 alert-light-light dark-helper">
                    <h4 className="mb-3">{CustomBorderRadiusClass}</h4>
                    {[...Array(11)]?.map((_, index) => (
                        <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                            <div className={`helper-box b-r-${index} bg-light border`}></div>
                            <span>.b-r-{index}</span>
                        </div>
                    ))}
                </div>
            </Col>
            <Col xxl={3} sm={6}>
                <div className="border-wrapper h-100 alert-light-light dark-helper">
                    <h4 className="mb-3">{BorderColor}</h4>
                    {BorderColorData?.map((item, index) => (
                        <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                            <div className={`helper-box border-${item} border`}></div>
                            <span>.border-{item}</span>
                        </div>
                    ))}
                </div>
            </Col>
            <Col xxl={3} sm={6}>
                <div className="border-wrapper h-100 alert-light-light dark-helper">
                    <h4 className="mb-3">{BorderWidth}</h4>
                    {[...Array(10)].map((_, index) => (
                        <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                            <div className={`helper-box border-${index + 1} border`}> </div>
                            <span>.border-{index + 1}</span>
                        </div>
                    ))}
                </div>
            </Col>
        </>
    )
}

export default BorderCards
