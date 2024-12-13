import { Href } from "@/Constant";
import { InformationCommonPropsType } from "@/Types/SearchResult";
import Link from "next/link";

const InformationCommon: React.FC<InformationCommonPropsType> = ({ item }) => {
  return (
    <div className="info-block">
      <Link href={Href}>{item.url}</Link>
      <h5>{item.title}</h5>
      <p>{item.detail}</p>
      <div className="star-ratings">
        <ul className="search-info">
          {item.showStar ? <li>
            {item.showStar.map((data, index) =>
              data === true ? (
                <i className="icofont icofont-ui-rating" key={index} />
              ) : (
                <i className="icofont icofont-ui-rate-blank" key={index} />
              )
            )}
          </li> : ""}
          <li>3 stars</li>
          <li>590</li>
          <li>Theme</li>
        </ul>
      </div>
    </div>
  );
};

export default InformationCommon;