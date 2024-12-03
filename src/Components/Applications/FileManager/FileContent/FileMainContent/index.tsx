import { CardBody } from "reactstrap";
import { Files } from "@/Constant";
import { FileMainContentPropsType } from "@/Types/FileManager";
import { useAppSelector } from "@/Redux/Hooks";
import QuickAccess from "./QuickAccess";
import FolderList from "./FolderList";
import FileList from "./FileList";

const FileMainContent: React.FC<FileMainContentPropsType> = ({ fileList }) => {
    const { searchTerm } = useAppSelector((state) => state.fileManager);

    return (
        <CardBody className="file-manager">
            {!searchTerm && (
                <>
                    <QuickAccess />
                    <FolderList />
                </>
            )}
            <h5 className="mt-4">{Files}</h5>
            <FileList myFile={fileList} />
        </CardBody>
    );
};

export default FileMainContent;
