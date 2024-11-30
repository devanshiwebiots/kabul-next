import { Button, Col, TabContent, TabPane } from "reactstrap";
import { useAppSelector } from "@/Redux/Hooks";
import TabOneContent from "./TabOneContent";
import HandlePrevNextButton from "../Common/HandlePrevNextButton";
import TabTwoContent from "./TabTwoContent";
import TabThreeContent from "./TabThreeContent";
import TabFourContent from "./TabFourContent";
import TabFiveContent from "./TabFiveContent";

const TabsContent = () => {
  const { navId } = useAppSelector((state) => state.addProduct);
  return (
    <>
      <Col xxl={9} xl={8} className="box-col-8 position-relative">
        <TabContent activeTab={navId}>
          <TabPane tabId={1}>
            <TabOneContent />
          </TabPane>
          <TabPane tabId={2}>
            <TabTwoContent />
          </TabPane>
          <TabPane tabId={3}>
            <TabThreeContent/>
          </TabPane>
          <TabPane tabId={4}>
            <TabFourContent/>
          </TabPane>
          <TabPane tabId={5}>
            <TabFiveContent/>
          </TabPane>
        </TabContent>
        <HandlePrevNextButton />
      </Col>
    </>
  );
}

export default TabsContent
