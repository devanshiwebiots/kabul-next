import { Href } from "@/Constant";
import { AddProjectAndUpload } from "@/Data/Users";
import Link from "next/link";
import { Button } from "reactstrap";

const AddProjectsAndUploadTableBody = () => {
  return (
    <tbody>
      {AddProjectAndUpload?.map((data, index) => (
        <tr key={index}>
          <td className="add-project"><Link className="text-inherit" href={Href}>{data.title}</Link></td>
          <td>{data.type}</td>
          <td>{data.date}</td>
          <td><span className={`status-icon bg-${data.statusClass}`} /> {data.status}</td>
          <td>${data.price}</td>
          <td className="text-end">
            <Button color="primary" tag="a" size="sm" href={Href}><i className="fa fa-pencil" /></Button>
            <Button color="success" tag="a" size="sm" href={Href}><i className="fa fa-link" /> </Button>
            <Button color="danger" tag="a" size="sm" href={Href}><i className="fa fa-trash" /></Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AddProjectsAndUploadTableBody;
