import { useAppSelector } from "@/Redux/Hooks";
import { Fragment } from "react";
import { Col, TabPane } from "reactstrap";
import { ImagePath } from "@/Constant";
import EmailSidebarContent from "./Common/EmailSidebarContent";

const StarredContent = () => {
  const { inboxEmail } = useAppSelector((state) => state.letterBox);
  let starBadges = inboxEmail.filter((data) => data.star === true && 1);

  return (
    <TabPane tabId='3'>
      <div className='mail-body-wrapper'>
        <ul>
          {starBadges?.length > 0 ? (
            inboxEmail?.map((data, i) => (
              <Fragment key={i}>
                {data.star && (
                  <li className='inbox-data'>
                    <EmailSidebarContent data={data} ids={i} />
                  </li>
                )}
              </Fragment>
            ))
          ) : (
            <Col sm={12}>
              <div>
                <div className='search-not-found text-center p-5'>
                  <p>Sorry, Not Found Any Email</p>
                </div>
              </div>
            </Col>
          )}
        </ul>
      </div>
    </TabPane>
  );
};

export default StarredContent;
