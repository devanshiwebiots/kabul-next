import { BackgroundColorsData } from '@/Data/UiKits/HelperClasses'
import { Col } from 'reactstrap'

const BackgroundColorSection: React.FC<{ title: string, classPrefix: string }> = ({ title, classPrefix }) => {
    return (
        <Col xl={4} sm={6}>
            <div className="border-wrapper h-100 border">
                <h4 className="mb-3">{title}</h4>
                {BackgroundColorsData?.map((item, index) => (
                    <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                        <div className={`helper-box ${classPrefix}-${item}`}></div>
                        {`.${classPrefix}-${item}`}
                    </div>
                ))}
            </div>
        </Col>
    )
}

export default BackgroundColorSection
