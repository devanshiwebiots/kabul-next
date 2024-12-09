import { TabPane } from "reactstrap";
import { DraftEmailData } from "@/Data/LetterBox";
import EmailSidebarContent from "./Common/EmailSidebarContent";

const DraftContent = () => {
  return (
    <TabPane tabId="4">
      <div className="mail-body-wrapper">
        <ul>
          {DraftEmailData?.map((data,i)=>(
            <li className="inbox-data" key={i}>
              <EmailSidebarContent data={data} ids={i}/> 
            </li>
          ))}
        </ul>
      </div>
    </TabPane>
  );
};

export default DraftContent;
