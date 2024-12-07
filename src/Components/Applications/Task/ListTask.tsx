import { Documentation, Href, Print } from "@/Constant";
import { useRef } from "react";
import { Printer } from "react-feather";
import { useReactToPrint } from "react-to-print";
import { Card, CardHeader } from "reactstrap";
import CreatedByMe from "./CreatedByMe";
import Link from "next/link";

const ListOfTask = () => {

  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <Card className="mb-0">
      <CardHeader className="d-flex pb-0">
        <h4 className="mb-0">{Documentation}</h4>
        {/* <Link href={Href} onClick={handlePrint}><Printer className="me-2" />{Print}</Link> */}
      </CardHeader>
      <CreatedByMe ref={contentRef} />
    </Card>
  );
};

export default ListOfTask;
