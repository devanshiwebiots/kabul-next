import { AlertCircle, Clock, Folder, Home, Star, Trash2 } from "react-feather";

export const FileSideButton = [
  {
    className: "primary",
    icon: <Home />,
    title: "Home",
  },
  {
    className: "light",
    icon: <Folder />,
    title: "All",
  },
  {
    className: "light",
    icon: <Clock />,
    title: "Recent",
  },
  {
    className: "light",
    icon: <Star />,
    title: "Starred",
  },
  {
    className: "light",
    icon: <AlertCircle />,
    title: "Recovery",
  },
  {
    className: "light",
    icon: <Trash2 />,
    title: "Deleted",
  },
];

export const FileListData = [
  {
    id: 1,
    color:"info",
    icon: "f-22 fa fa-folder font-info",
    name: "Logo.psd",
    size: "2.0 MB",
    modify: " 6 Day ago",
    folderClass: "file-archive-o",
    title: "Tivo admin",
    folderSize: "15",
    modifyFolder: "7 Hour ago",
  },
  {
    id: 2,
    color:"success",
    icon: "file-excel-o",
    name: "Backend.xls",
    size: "3.0 GB",
    modify: " 4 Day ago",
    folderClass: "folder",
    title: "Viho admin",
    folderSize: "14",
    modifyFolder: "2 Day ago",
  },
  {
    id: 3,
    color:"warning",
    icon: "file-archive-o",
    name: "Project.zip",
    size: "1.9 GB",
    modify: " 3 Day ago",
    folderClass: "file-archive-o",
    title: "Unice admin",
    folderSize: "15",
    modifyFolder: "1 Day ago",
  },
  {
    id: 4,
    color:"primary",
    icon: "folder",
    name: "Report.txt",
    size: "0.9 KB",
    modify: " 1 Day ago",
    folderClass: "folder",
    title: "Koho admin",
    folderSize: "10",
    modifyFolder: "1 Day ago",
  },
];

export const QuickAccessData = [
  {
    title: "Videos",
    color:"danger",
    icon: "youtube-play",
  },
  {
    title: "Apps",
    color:"info",
    icon: "th",
  },
  {
    title: "Document",
    color:"secondary",
    icon: "file-text-o",
  },
  {
    title: "Music",
    color:"warning",
    icon: "music",
  },
  {
    title: "Download",
    color:"primary",
    icon: "download",
  },
  {
    title: "Folder",
    color:"info",
    icon: "folder",
  },
  {
    title: "Zip File",
    color:"secondary",
    icon:"file-archive-o",
  },
  {
    title: "Trash",
    color:"danger",
    icon:"trash",
  },
];