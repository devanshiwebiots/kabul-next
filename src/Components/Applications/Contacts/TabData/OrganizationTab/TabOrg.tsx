import { Delete, Edit, EmailAddress, Gender, General, History, Href, ImagePath, Name, Personal, Print } from '@/Constant';
import { OrganizationData } from '@/Data/Contact';
import Image from 'next/image';
import Link from 'next/link';
import { TabPane } from 'reactstrap';

const TabOrg = () => {

  return (
    <>
      {OrganizationData?.map((item, i) =>
        <TabPane tabId={item.activeTab} key={i}>
          <div className="profile-mail">
            <div className="d-flex">
              <Image height={100} width={100} priority className="img-fluid m-r-20 rounded-circle update_img_0" src={`${ImagePath}/user/${item.image}`} alt="" />
              <div className="flex-grow-1 mt-0">
                <h6><span className="first_name_0">{item.name}</span></h6>
                <p className="email_add_0">{item.email}</p>
                <ul>
                  <li><Link href={Href}>{Edit}</Link></li>
                  <li><Link href={Href}>{Delete}</Link></li>
                  <li><Link href={Href}>{History}</Link></li>
                  <li><Link href={Href}>{Print}</Link></li>
                </ul>
              </div>
            </div>
            <div className="email-general">
              <h6>{General}</h6>
              <p>{EmailAddress} <span className="font-primary email_add_5">{item.email}</span></p>
              <div className="gender">
                <h6>{Personal}</h6>
                <p>{Gender} <span>{item.gender}</span></p>
              </div>
            </div>
          </div>
        </TabPane>
      )}
    </>
  );
};

export default TabOrg;