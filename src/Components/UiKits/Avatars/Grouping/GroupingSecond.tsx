import { ImagePath } from "@/Constant";
import { GroupingImageTwo } from "@/Data/UiKits/Avatars";
import Image from "next/image";

const GroupingSecond = () => {
  return (
    <div className='customers d-inline-block avatar-group'>
      <ul>
        {GroupingImageTwo?.map((item, index) => (
          <li className='d-inline-block' key={index}>
            <Image height={item.size} width={item.size} className={`${item.className} img-${item.size} h-auto`} src={`${ImagePath}/${item.src}.jpg`} alt='image' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupingSecond