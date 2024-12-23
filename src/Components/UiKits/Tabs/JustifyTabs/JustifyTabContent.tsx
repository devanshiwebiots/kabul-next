import { ImagePath } from "@/Constant";
import { Data } from "@/Data/UiKits/Tabs";
import { TabContentProp } from "@/Types/UiKits";
import Image from "next/image";
import { CardBody, TabContent, TabPane } from "reactstrap";

const JustifyTabContent: React.FC<TabContentProp> = ({ basicTab }) => {
  return (
    <CardBody className="px-0 pb-0">
      <TabContent activeTab={basicTab}>
        {Data?.map(({ id, items }, index) => (
          <TabPane tabId={id} key={index}>
            <div className="designer-details">
              {items?.map(({ src, title, number }, index) => (
                <div className="designer-profile" key={index}>
                  <div className="designer-wrap">
                    <Image height={50} width={50} priority className="designer-img" src={`${ImagePath}/${src}`} alt="profile" />
                    <div className="designer-content">
                      <h6>{title}</h6>
                      <p> {number}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
        ))}
      </TabContent>
    </CardBody>
  );
};

export default JustifyTabContent;