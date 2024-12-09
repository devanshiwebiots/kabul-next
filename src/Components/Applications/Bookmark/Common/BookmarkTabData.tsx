import { CommonTabCardProp } from "@/Types/Bookmark";
import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import ViewBookmark from "../ViewBookmarks";

const BokkmarkTabData: React.FC<CommonTabCardProp> = ({ tabId, title }) => {
  return (
    <TabPane tabId={tabId}>
      <Card className='mb-0'>
        <CardHeader className='d-flex mb-0'>
          <h4 className='mb-0'>{title}</h4>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div className="details-bookmark text-center" ><span>No Bookmarks Found.</span></div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default BokkmarkTabData;
