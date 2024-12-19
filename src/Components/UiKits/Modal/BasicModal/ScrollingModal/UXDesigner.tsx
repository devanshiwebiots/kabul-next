import { UXDesigners } from "@/Constant";
import { ScrollingUxData } from "@/Data/UiKits/Modal";
import { ArrowRightCircle } from "react-feather";

const UXDesigner = () => {
  return (
    <>
      <h6 className="f-w-600">{UXDesigners}</h6>
      <div className="d-flex mt-3">
        <div className="flex-shrink-0"><ArrowRightCircle className="svg-modal" /></div>
        <div className="flex-grow-1 ms-2">
          <p>User research, persona creation, building wireframes and interactive prototypes, and testing ideas are among the common tasks of a UX designer. These duties can differ greatly between organizations.</p>
        </div>
      </div>
      {ScrollingUxData?.map((item, index) => (
        <div className="d-flex" key={index}>
          <div className="flex-shrink-0"><ArrowRightCircle className="svg-modal" /></div>
          <div className="flex-grow-1 ms-2">
            <p>{item}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default UXDesigner;