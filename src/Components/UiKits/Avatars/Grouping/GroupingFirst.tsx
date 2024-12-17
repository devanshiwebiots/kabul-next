import { ImagePath } from "@/Constant";
import { GroupingImageOne } from "@/Data/UiKits/Avatars";
import Image from "next/image";

const GroupingFirst = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <ul>
        {GroupingImageOne?.map((item, index) => (
          <li className="d-inline-block" key={index}>
            <Image height={item.size} width={item.size} className={`img-${item.size} b-r-${item.className} h-auto`} src={`${ImagePath}/avtar/${item.src}.jpg`} alt="image" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupingFirst