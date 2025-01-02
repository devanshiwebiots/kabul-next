import { ImagePath } from "@/Constant";
import { GroupingImageThird } from "@/Data/UiKits/Avatars";
import Image from "next/image";

const GroupingThird = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <ul>
        {GroupingImageThird?.map((item, index) => (
          <li className="d-inline-block" key={index}>
            <Image height={40} width={40} className="img-40 rounded-circle" src={`${ImagePath}/user/${item}.jpg`} alt="image" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupingThird