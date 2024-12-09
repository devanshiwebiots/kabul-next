import { useAppSelector } from "@/Redux/Hooks";
import MailPagination from "./MailPagination";
import { TabPane } from "reactstrap";
import EmailSidebarContent from "../Common/EmailSidebarContent";

const InboxContent = () => {
  const { inboxEmail, page } = useAppSelector((state) => state.letterBox);

  return (
    <TabPane tabId="1">
      <div className="mail-body-wrapper">
        <ul>
          {inboxEmail?.map((data, i) => (
            <li className={`inbox-data ${page ? i < 6 ? "hidden" : "" : i < 6 ? "" : "hidden" }`} key={i}>
              <EmailSidebarContent data={data} ids={i}/>
            </li>
          ))}
        </ul>
        <MailPagination />
      </div>
    </TabPane>
  );
};

export default InboxContent;
