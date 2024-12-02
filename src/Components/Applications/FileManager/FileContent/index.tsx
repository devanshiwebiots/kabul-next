import { useAppSelector } from '@/Redux/Hooks';
import { Card, CardHeader } from 'reactstrap';
import ActionButtons from './ActionButtons';
import FileMainContent from './FileMainContent';
import SearchBar from './SearchBar';

const FileContent = () => {
  const { myFile, searchTerm } = useAppSelector((state) => state.fileManager);

  const fileList = myFile?.filter((data) => { if (searchTerm == null) return data; if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) return data });

  return (
    <Card>
      <CardHeader className='pb-0'>
        <div className="d-md-flex d-sm-block">
          <SearchBar />
          <ActionButtons />
        </div>
      </CardHeader>
      {fileList?.length ? <FileMainContent fileList={fileList} /> : <h5 className='mx-auto my-4'>No file found</h5>}
    </Card>
  )
}

export default FileContent