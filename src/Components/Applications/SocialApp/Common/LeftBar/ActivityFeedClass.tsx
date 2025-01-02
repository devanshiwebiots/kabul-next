import { useState } from "react";
import { Card } from "reactstrap";
import HeaderWithIcon from "../HeaderWithIcon";
import { ActivityFeed, Href, ImagePath } from "@/Constant";
import Image from "next/image";
import Link from "next/link";
import { CardBody, Collapse } from "reactstrap";
import { FriendData } from "@/Data/SocialApp";

const ActivityFeedClass = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={ActivityFeed} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Collapse isOpen={isOpen}>
        <CardBody className="social-status filter-cards-view">
          {FriendData?.map((data, index) => (
            <div className="d-flex" key={index}>
              <Image height={50} width={50} className="rounded-circle m-r-15" src={`${ImagePath}/user/${data.imageName}.jpg`} alt="user" />
              <div className="flex-grow-1">
                <span className="f-w-500 d-block">{data.title}</span>
                <p>Commented on Shaun Parks <Link href={Href}>Photo</Link></p>
                <span className="light-span">{data.time} Ago</span>
              </div>
            </div>
          ))}
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default ActivityFeedClass;
