import { TabPane } from "reactstrap";
import { SentEmailData } from "@/Data/LetterBox";
import EmailSidebarContent from "./Common/EmailSidebarContent";

const SentContent = () => {
  return (
    <TabPane tabId="2">
      <div className="mail-body-wrapper">
        <ul>
          {SentEmailData?.map((data,i)=>(
            <li className="inbox-data" key={i}>
              <EmailSidebarContent data={data} ids={i}/> 
            </li>
          ))}
        </ul>
      </div>
    </TabPane>
  );
};

export default SentContent;
