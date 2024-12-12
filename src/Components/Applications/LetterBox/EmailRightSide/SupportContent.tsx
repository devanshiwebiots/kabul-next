import { TabPane } from "reactstrap";
import { SupportEmailData } from "@/Data/LetterBox";
import EmailSidebarContent from "./Common/EmailSidebarContent";

const SupportContent = () => {
  return (
    <TabPane tabId="8">
      <div className="mail-body-wrapper">
        <ul>
          {SupportEmailData?.map((data, i) => (
            <li className="inbox-data" key={i}>
              <EmailSidebarContent data={data} ids={i}/> 
            </li>
          ))}
        </ul>
      </div>
    </TabPane>
  );
};

export default SupportContent;
