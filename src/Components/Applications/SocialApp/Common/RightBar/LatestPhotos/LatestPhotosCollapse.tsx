import RatioImage from "@/CommonComponents/RatioImage";
import { ImagePath } from "@/Constant";
import { MyProfileClassCollapseProp } from "@/Types/SocialApp";
import { CardBody, Collapse } from "reactstrap";

const LatestPhotosCollapse: React.FC<MyProfileClassCollapseProp> = ({ isFilter }) => {

  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="photos filter-cards-view">
        <ul className="text-center">
          {[...Array(8)].map((_, index) => (
            <li key={index}>
              <div className="latest-post">
                <RatioImage className="img-fluid" alt="user" src={`${ImagePath}/social-app/post-${index + 1}.png`} />
              </div>
            </li>
          ))}
        </ul>
      </CardBody>
    </Collapse>
  );
};

export default LatestPhotosCollapse;
