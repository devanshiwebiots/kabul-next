import { CommonKabulModalTitleType } from "@/Types/UiKits";

const CommonKabulModalTitle: React.FC<CommonKabulModalTitleType> = ({ heading, subHeading, text }) => {
  return (
    <>
      <ul className="dot-group pb-3 pt-0">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="title-wrapper pb-3 modal-heading">
        <h4 className="theme-name mb-0 f-w-600">
          <span>{heading}</span>
          {subHeading}
        </h4>
        <p>{text}</p>
      </div>
    </>
  );
};

export default CommonKabulModalTitle;