import { FileListPropsType } from "@/Types/FileManager";

const FileList :React.FC<FileListPropsType> = ({ myFile }) => {
  return (
    <ul className="files-content mt-2">
      {myFile?.map((data, i) => (
        <li key={i} className="folder-box d-flex align-items-center">
          <div className="d-flex align-items-center files-list">
            <div className="flex-shrink-0 file-left"><i className={`f-22 fa fa-${data.icon} font-${data.color}`}></i></div>
            <div className="flex-grow-1 ms-3">
              <h6>{data.name}</h6>
              <p className="mb-1">{data.modifyFolder}, {data.size}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FileList;
