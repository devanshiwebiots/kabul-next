import { Description1, Description2, Description3, Description4 } from "@/Constant";
import { ClothsDetailsTabContentProp } from "@/Types/Ecommerce";
import { TabContent, TabPane } from "reactstrap";

const TabsContent :React.FC<ClothsDetailsTabContentProp> = ({ activeTab }) => {  

  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId={1}>
        <p className="mb-0 m-t-20">{Description1}</p>
        <p className="mb-0 m-t-20">{Description2}</p>
      </TabPane>
      <TabPane tabId={2}>
        <p className="mb-0 m-t-20">{Description3}</p>
      </TabPane>
      <TabPane tabId={3}>
        <p className="mb-0 m-t-20"> {Description4}</p>
      </TabPane>
      <TabPane tabId={4}>
      <p className="mb-0 m-t-20">{Description3}</p>
      </TabPane>
    </TabContent>
  );
};

export default TabsContent;
