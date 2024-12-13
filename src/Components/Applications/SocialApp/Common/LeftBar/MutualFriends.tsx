import { ImagePath, MutualFriend } from "@/Constant";
import { MutualFriendList } from "@/Data/SocialApp";
import Image from "next/image";
import { useState } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import HeaderWithIcon from "../HeaderWithIcon";

const MutualFriends = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={MutualFriend} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Collapse isOpen={isOpen}>
        <CardBody className="social-status filter-cards-view">
          {MutualFriendList?.map((data, index) => (
            <div className="d-flex" key={index}>
              <Image height={50} width={50} className="rounded-circle m-r-15" src={`${ImagePath}/user/${data.imageName}`} alt="user" />
              <div className={`social-status social-${data.socialClass}`} />
              <div className="flex-grow-1">
                <span className="f-w-600 d-block">{data.title}</span>
                <span className="d-block">{data.email}.com@gmail.com</span>
              </div>
            </div>
          ))}
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default MutualFriends;
