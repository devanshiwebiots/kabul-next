import { Href, ImagePath, StarColor } from "@/Constant";
import { JobData } from "@/Data/Miscellaneous/JobSearch";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { Badge, Card, CardBody } from "reactstrap";

const ListViewCard = () => {
  return (
    <>
      {JobData?.slice(0, 8).map((item) => (
        <Card key={item.id} className={`${item.ribbons ? "ribbon-vertical-left-wrapper" : "pb-0"}`}>
          {item.ribbons ? (
            <div className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!item.ribbons && "d-none"}`}>
              <i className="icofont icofont-love"></i>
            </div>
          ) : ""}
          <div className="job-search">
            <CardBody>
              <div className="d-flex">
                <Image height={36} width={33} priority className="b-r-0 img-fluid m-r-20" src={`${ImagePath}/job-search/${item.logo}`} alt="job logo" />
                <div className="flex-grow-1">
                  <h6 className="f-w-600">
                    <Link href={Href}>{item.job_name}</Link>
                    {item.type === "new" ? (<Badge color="primary" className="pull-right">{item.badgeValue}</Badge>) : (<span className="pull-right">{item.type}</span>)}
                  </h6>
                  <p>
                    {item.job_area}, {item.job_city}
                    <Rating className="ms-1" fillColor={StarColor} initialValue={Math.random() * 5} size={14} />
                  </p>
                </div>
              </div>
              <p>{item.job_description}</p>
            </CardBody>
          </div>
        </Card>
      ))}
    </>
  );
};
export default ListViewCard;
