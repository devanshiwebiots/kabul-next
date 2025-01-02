import { ActivityLogData } from "@/Data/SocialApp";
import { MyActivityProp } from "@/Types/SocialApp";

const MyActivity :React.FC<MyActivityProp> = ({ heading }) => {
  return (
    <div className="my-activity">
      <h6 className="f-w-600 mb-3">{heading}</h6>
      {ActivityLogData?.map((item,index) => (
        <p key={index}>
          <span>{item.icon}</span>
          {item.description}
        </p>
      ))}
    </div>
  );
};

export default MyActivity;
