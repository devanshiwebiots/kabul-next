import { Grid, List } from 'react-feather';
import { Href } from '@/Constant';
import { useAppDispatch } from '@/Redux/Hooks';
import { setGridView } from '@/Redux/Reducer/BookmarkTabSlice';
import Link from 'next/link';

const ViewBookmark = () => {
  const dispatch = useAppDispatch()
  const gridBookmark = () => dispatch(setGridView(true)) 
  const listBookmark = () => dispatch(setGridView(false)) 

  return (
       <ul className= 'simple-list flex-row' >
        <li><Link className="grid-bookmark-view" href={Href}><Grid onClick={gridBookmark} /></Link></li>
        <li><Link className="list-layout-view" href={Href}><List onClick={listBookmark} /></Link></li>
      </ul>
  );
};
export default ViewBookmark;