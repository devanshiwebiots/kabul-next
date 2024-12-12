import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CommonTableComponentProp } from "@/Types/Tables";
import { Card, Col, Row, Table } from "reactstrap";

const CommonTableComponent: React.FC<CommonTableComponentProp> = ({ title, data, tableClass }) => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={title} headClass="pb-18" />
        <div>
          <Row className="card-block">
            <Col sm={12} lg={12} xl={12}>
              <div className="table-responsive theme-scrollbar">
                <Table className={tableClass} bordered>
                  <tbody>
                    {data?.map((component, index) => (
                      <tr key={index}>
                        <td className={component.tdClassName}>{component.title}</td>
                        <td className="w-50">{component.tableColData}</td>
                        <td>
                          {component.details.map((detail, index) => (
                            <span key={index}>
                              {detail.text}
                              {detail.code && <code>&nbsp;{detail.code}&nbsp;</code>}
                            </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default CommonTableComponent;
