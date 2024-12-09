import { Link, MoreHorizontal, Printer, Trash2 } from "react-feather";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import SweetAlert from "sweetalert2";
import { Href, Print } from "@/Constant";
import { EmptyTaskClassProp } from "@/Types/Task";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { removeAssignTask } from "@/Redux/Reducer/TaskSlice";

const AssignedToMeClass :React.FC<EmptyTaskClassProp> = ({ title }) => {
  const { myTask } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  const deleteTask = (taskId: number) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch(removeAssignTask(taskId));
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };

  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h4 className="mb-0">{title}</h4>
        <Link href={Href}><Printer className="me-2"/>{Print}</Link>
      </CardHeader>
      <CardBody className="p-0">
        <div className="taskadd">
          <div className="table-responsive">
            <Table>
              <tbody>
                {myTask?.length ? (
                  myTask?.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <h6 className="task_title_0">{data.title}</h6>
                          <p className="project_name_0">{data.collection}</p>
                        </td>
                        <td><p className="task_desc_0">{data.description}</p></td>
                        <td>
                          <Link className="me-2" href={Href}><Link /></Link>
                          <Link href={Href}><MoreHorizontal /></Link>
                        </td>
                        <td><Link href={Href} onClick={() => deleteTask(data.id)}><Trash2 /></Link></td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>
                      <div className="no-favourite">
                        <span>No Tasks Found</span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AssignedToMeClass;
