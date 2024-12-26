import { DropFilesHereOrClickToUpload } from "@/Constant";

const CommonFileBody = () => {
  return (
    <div className="dz-message needsclick">
      <i className="icon-cloud-up fs-1 txt-primary"></i>
      <h4>{DropFilesHereOrClickToUpload}</h4>
      <span className="note needsclick">
        (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
      </span>
    </div>
  );
};

export default CommonFileBody;
