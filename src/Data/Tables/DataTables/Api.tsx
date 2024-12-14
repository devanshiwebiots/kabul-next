import { ZeroConfigurationTableColumnsType, DeleteRowDataProp, DeleteRowData, AddRowsTable } from "@/Types/Tables";
import { Href, ImagePath } from "@/Constant";
import Link from "next/link";
import Image from "next/image";

export const ChildRowData = [
  {
    text: "The DataTables API has a number of methods for attaching child rows to a parent row in the DataTable. This can be used to show additional information about a row, useful for cases where you wish to convey more information about a row than there is space for in the host table.",
  },
];

export const ChildRowColumn = [
  {
    name: "Name",
    selector: (row: ZeroConfigurationTableColumnsType) => row["name"],
    sortable: true,
  },
  {
    name: "Position",
    selector: (row: ZeroConfigurationTableColumnsType) => `${row.position}`,
    sortable: true,
  },
  {
    name: "Office",
    selector: (row: ZeroConfigurationTableColumnsType) => `${row.office}`,
    sortable: true,
  },
  {
    name: "Salary",
    selector: (row: ZeroConfigurationTableColumnsType) => `${row.salary}`,
    sortable: true,
  },
];

export const CustomFilteringList = [
  {
    text: "This example shows a search being performed on the age column in the data, based upon two inputs.",
  },
];

export const FilteringTableData = [
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Airi Satou
      </>
    ),
    position: "Accountant",
    office: "Tokyo",
    age: 33,
    startDate: "2008/11/28",
    salary: "$162,700",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/11.png`} alt="user image" />
        Ashton Cox
      </>
    ),
    position: "Chief Executive Officer (CEO)",
    office: "London",
    age: 47,
    startDate: "2009/10/09",
    salary: "$1,200,000",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Bradley Greer
      </>
    ),
    position: "Junior Technical Author",
    office: "San Francisco",
    age: 66,
    startDate: "2009/01/12",
    salary: "$86,000",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Brenden Wagner
      </>
    ),
    position: "Software Engineer",
    office: "London",
    age: 41,
    startDate: "2012/10/13",
    salary: "$132,000",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Brielle Williamson
      </>
    ),
    position: "Software Engineer",
    office: "San Francisco",
    age: 28,
    startDate: "2011/06/07",
    salary: "$206,850",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Bruno Nash
      </>
    ),
    position: "Integration Specialist",
    office: "New York",
    age: 61,
    startDate: "2012/12/02",
    salary: "$372,000",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Caesar Vance
      </>
    ),
    position: "Software Engineer",
    office: "London",
    age: 38,
    startDate: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Cara Stevens
      </>
    ),
    position: "Pre-Sales Support",
    office: "New York",
    age: 21,
    startDate: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/3.png`} alt="user image" />
        Cedric Kelly
      </>
    ),
    position: "Sales Assistant",
    office: "New York",
    age: 46,
    startDate: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Cedric Kelly
      </>
    ),
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: 22,
    startDate: "2012/03/29",
    salary: "$433,060",
  },

  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Charde Marshall
      </>
    ),
    position: "Regional Director",
    office: "San Francisco",
    age: 36,
    startDate: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Colleen Hurst
      </>
    ),
    position: "Javascript Developer",
    office: "San Francisco",
    age: 39,
    startDate: "2009/09/15",
    salary: "$205,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Dai Rios
      </>
    ),
    position: "Personnel Lead",
    office: "Edinburgh",
    age: 35,
    startDate: "2012/09/26",
    salary: "$217,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Donna Snider
      </>
    ),
    position: "Customer Support",
    office: "New York",
    age: 27,
    startDate: "2011/01/25",
    salary: "$112,000",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Doris Wilder
      </>
    ),
    position: "Sales Assistant",
    office: "Sidney",
    age: 23,
    startDate: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Finn Camacho
      </>
    ),
    position: "Support Engineer",
    office: "San Francisco",
    age: 47,
    startDate: "2009/07/07",
    salary: "$87,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Fiona Green
      </>
    ),
    position: "Chief Operating Officer (COO)",
    office: "San Francisco",
    age: 48,
    startDate: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Garrett Winters
      </>
    ),
    position: "Accountant",
    office: "Tokyo",
    age: 63,
    startDate: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Gavin Cortez
      </>
    ),
    position: "Team Leader",
    office: "San Francisco",
    age: 22,
    startDate: "2008/10/26",
    salary: "$235,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Gavin Joyce
      </>
    ),
    position: "Developer",
    office: "Edinburgh",
    age: 42,
    startDate: "2010/12/22",
    salary: "$92,575",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Gloria Little
      </>
    ),
    position: "Systems Administrator",
    office: "New York",
    age: 59,
    startDate: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Haley Kennedy
      </>
    ),
    position: "Senior Marketing Designer",
    office: "London",
    age: 43,
    startDate: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Hermione Butler
      </>
    ),
    position: "Regional Director",
    office: "London",
    age: 47,
    startDate: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Herrod Chandler
      </>
    ),
    position: "Sales Assistant",
    office: "San Francisco",
    age: 59,
    startDate: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Hope Fuentes
      </>
    ),
    position: "Secretary",
    office: "San Francisco",
    age: 41,
    startDate: "2010/02/12",
    salary: "$109,850",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Howard Hatfield
      </>
    ),
    position: "Office Manager",
    office: "San Francisco",
    age: 51,
    startDate: "2008/12/16",
    salary: "$164,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Jackson Bradshaw
      </>
    ),
    position: "Director",
    office: "New York",
    age: 65,
    startDate: "2008/09/26",
    salary: "$645,750",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Jena Gaines
      </>
    ),
    position: "Office Manager",
    office: "London",
    age: 30,
    startDate: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Jenette Caldwell
      </>
    ),
    position: "Development Lead",
    office: "New York",
    age: 30,
    startDate: "2011/09/03",
    salary: "$345,000",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Doris Wilder
      </>
    ),
    position: "Sales Assistant",
    office: "Sidney",
    age: 23,
    startDate: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Finn Camacho
      </>
    ),
    position: "Support Engineer",
    office: "San Francisco",
    age: 47,
    startDate: "2009/07/07",
    salary: "$87,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Fiona Green
      </>
    ),
    position: "Chief Operating Officer (COO)",
    office: "San Francisco",
    age: 48,
    startDate: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Garrett Winters
      </>
    ),
    position: "Accountant",
    office: "Tokyo",
    age: 63,
    startDate: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Gavin Cortez
      </>
    ),
    position: "Team Leader",
    office: "San Francisco",
    age: 22,
    startDate: "2008/10/26",
    salary: "$235,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Gavin Joyce
      </>
    ),
    position: "Developer",
    office: "Edinburgh",
    age: 42,
    startDate: "2010/12/22",
    salary: "$92,575",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Gloria Little
      </>
    ),
    position: "Systems Administrator",
    office: "New York",
    age: 59,
    startDate: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Haley Kennedy
      </>
    ),
    position: "Senior Marketing Designer",
    office: "London",
    age: 43,
    startDate: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Hermione Butler
      </>
    ),
    position: "Regional Director",
    office: "London",
    age: 47,
    startDate: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Herrod Chandler
      </>
    ),
    position: "Sales Assistant",
    office: "San Francisco",
    age: 59,
    startDate: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Hope Fuentes
      </>
    ),
    position: "Secretary",
    office: "San Francisco",
    age: 41,
    startDate: "2010/02/12",
    salary: "$109,850",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Howard Hatfield
      </>
    ),
    position: "Office Manager",
    office: "San Francisco",
    age: 51,
    startDate: "2008/12/16",
    salary: "$164,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Jackson Bradshaw
      </>
    ),
    position: "Director",
    office: "New York",
    age: 65,
    startDate: "2008/09/26",
    salary: "$645,750",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Jena Gaines
      </>
    ),
    position: "Office Manager",
    office: "London",
    age: 30,
    startDate: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Jenette Caldwell
      </>
    ),
    position: "Development Lead",
    office: "New York",
    age: 30,
    startDate: "2011/09/03",
    salary: "$345,000",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Doris Wilder
      </>
    ),
    position: "Sales Assistant",
    office: "Sidney",
    age: 23,
    startDate: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Finn Camacho
      </>
    ),
    position: "Support Engineer",
    office: "San Francisco",
    age: 47,
    startDate: "2009/07/07",
    salary: "$87,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Fiona Green
      </>
    ),
    position: "Chief Operating Officer (COO)",
    office: "San Francisco",
    age: 48,
    startDate: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Garrett Winters
      </>
    ),
    position: "Accountant",
    office: "Tokyo",
    age: 63,
    startDate: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Gavin Cortez
      </>
    ),
    position: "Team Leader",
    office: "San Francisco",
    age: 22,
    startDate: "2008/10/26",
    salary: "$235,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Gavin Joyce
      </>
    ),
    position: "Developer",
    office: "Edinburgh",
    age: 42,
    startDate: "2010/12/22",
    salary: "$92,575",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Tiger Nixon
      </>
    ),
    position: "Systems Administrator",
    office: "New York",
    age: 59,
    startDate: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Timothy Mooney
      </>
    ),
    position: "Senior Marketing Designer",
    office: "London",
    age: 43,
    startDate: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Unity Butler
      </>
    ),
    position: "Regional Director",
    office: "London",
    age: 47,
    startDate: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Vivian Harrell
      </>
    ),
    position: "Sales Assistant",
    office: "San Francisco",
    age: 59,
    startDate: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Yuri Berry
      </>
    ),
    position: "Secretary",
    office: "San Francisco",
    age: 41,
    startDate: "2010/02/12",
    salary: "$109,850",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Zenaida Frank
      </>
    ),
    position: "Office Manager",
    office: "San Francisco",
    age: 51,
    startDate: "2008/12/16",
    salary: "$164,500",
  },
  {
    name: (
      <>
        <Image height={32} width={32} priority className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Zorita Serrano
      </>
    ),
    position: "Junior Javascript Developer",
    office: "Edinburgh",
    age: 43,
    startDate: "2013/02/01",
    salary: "$75,650",
  },
];

export const FilteringTableColumn = [
  {
    name: "Employee Name",
    cell: (row: DeleteRowDataProp) => row["name"],
    sortable: true,
  },
  {
    name: "Position",
    selector: (row: DeleteRowDataProp) => row["position"],
    sortable: true,
  },
  {
    name: "Office",
    selector: (row: DeleteRowDataProp) => row["office"],
    sortable: true,
  },
  {
    name: "Age",
    selector: (row: DeleteRowDataProp) => row["age"],
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row: DeleteRowDataProp) => row["startDate"],
    sortable: true,
  },
  {
    name: "Salary",
    selector: (row: DeleteRowDataProp) => row["salary"],
    sortable: true,
  },
];

export const DeleteRowDataList = [
  {
    name: "Airi Satou",
    id: 1,
    job: "Accountant",
    companyName: "Google Inc.",
    invoiceNumber: "#TY33",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>,
    date: "2008/11/28",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$162.700,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Angelica Ramos",
    id: 2,
    job: "Chief Executive Officer (CEO)",
    companyName: "Tata Co.",
    invoiceNumber: "#VC47",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
    date: "2009/10/09",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$1.200.000,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Bradley Greer",
    id: 3,
    job: "Software Engineer",
    companyName: "Tata Co.",
    invoiceNumber: "#JH41",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
    date: "2012/10/13",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$132.000,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Bruno Nash",
    id: 4,
    job: "Software Engineer",
    companyName: "Tata Co.",
    invoiceNumber: "#UY38",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">1.4%</i>,
    date: "2011/05/03",
    priority: <span className="badge badge-light-warning">Medium</span>,
    budget: "$163.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Caesar Vance",
    id: 5,
    job: "Pre-Sales Support",
    companyName: "New York",
    invoiceNumber: "#CV21",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
    date: "2011/12/12",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$106.450,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Cara Stevens",
    id: 6,
    job: "Sales Assistant",
    companyName: "New York",
    invoiceNumber: "#TY46",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%</i>,
    date: "2011/12/06",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$145.600,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Cedric Kelly",
    id: 7,
    job: "Senior Javascript Developer",
    companyName: "Edinburgh",
    invoiceNumber: "#UH22",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2012/03/29",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$433.060,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Charde Marshall",
    id: 8,
    job: "Regional Director",
    companyName: "Google Co.",
    invoiceNumber: "#FV36",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2008/10/16",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$470.600,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Colleen Hurst",
    id: 9,
    job: "Javascript Developer",
    companyName: "Google Co.",
    invoiceNumber: "#NB39",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">2.8%</i>,
    date: "2009/09/15",
    priority: <span className="badge badge-light-warning">Medium</span>,
    budget: "$205.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Dai Rios",
    id: 10,
    job: "Personnel Lead",
    companyName: "Edinburgh",
    invoiceNumber: "#YT35",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
    date: "2012/09/26",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$217.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Donna Snider",
    id: 11,
    job: "Customer Support",
    companyName: "New York",
    invoiceNumber: "#GD27",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%</i>,
    date: "2011/01/25",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$112.000,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Doris Wilder",
    id: 12,
    job: "Sales Assistant",
    companyName: "Sidney",
    invoiceNumber: "#BH23",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2010/09/20",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$85.600,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Finn Camacho",
    id: 13,
    job: "Support Engineer",
    companyName: "Google Co.",
    invoiceNumber: "#YU47",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2009/07/07",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$87.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Fiona Green",
    id: 14,
    job: "Chief Operating Officer (COO)",
    companyName: "Infosys Ltd.",
    invoiceNumber: "#GF48",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
    date: "2010/03/11",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$850.000,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Garrett Winters",
    id: 15,
    job: "Accountant",
    companyName: "Edinburgh",
    invoiceNumber: "#FG63",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2011/07/25",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$170.750,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Gavin Cortez",
    id: 16,
    job: "Team Leader",
    companyName: "Google Co.",
    invoiceNumber: "#SW22",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2008/10/26",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$235.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Gavin Joyce",
    id: 17,
    job: "Developer",
    companyName: "Edinburgh",
    invoiceNumber: "#TH42",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
    date: "2010/12/22",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$92.575,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Airi Satou",
    id: 18,
    job: "Accountant",
    companyName: "Google Inc.",
    invoiceNumber: "#TY33",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>,
    date: "2008/11/28",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$162.700,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Bruno Nash",
    id: 19,
    job: "Software Engineer",
    companyName: "Tata Co.",
    invoiceNumber: "#UY38",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">1.4%</i>,
    date: "2011/05/03",
    priority: <span className="badge badge-light-warning">Medium</span>,
    budget: "$163.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Gavin Cortez",
    id: 20,
    job: "Team Leader",
    companyName: "Google Co.",
    invoiceNumber: "#SW22",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2008/10/26",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$235.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Finn Camacho",
    id: 21,
    job: "Support Engineer",
    companyName: "Google Co.",
    invoiceNumber: "#YU47",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2009/07/07",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$87.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Doris Wilder",
    id: 22,
    job: "Sales Assistant",
    companyName: "Sidney",
    invoiceNumber: "#BH23",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2010/09/20",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$85.600,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Airi Satou",
    id: 23,
    job: "Accountant",
    companyName: "Google Inc.",
    invoiceNumber: "#TY33",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>,
    date: "2008/11/28",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$162.700,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Charde Marshall",
    id: 24,
    job: "Regional Director",
    companyName: "Google Co.",
    invoiceNumber: "#FV36",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2008/10/16",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$470.600,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Airi Satou",
    id: 25,
    job: "Accountant",
    companyName: "Google Inc.",
    invoiceNumber: "#TY33",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>,
    date: "2008/11/28",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$162.700,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Angelica Ramos",
    id: 26,
    job: "Chief Executive Officer (CEO)",
    companyName: "Tata Co.",
    invoiceNumber: "#VC47",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
    date: "2009/10/09",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$1.200.000,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Bradley Greer",
    id: 27,
    job: "Software Engineer",
    companyName: "Tata Co.",
    invoiceNumber: "#JH41",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
    date: "2012/10/13",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$132.000,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Bruno Nash",
    id: 28,
    job: "Software Engineer",
    companyName: "Tata Co.",
    invoiceNumber: "#UY38",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">1.4%</i>,
    date: "2011/05/03",
    priority: <span className="badge badge-light-warning">Medium</span>,
    budget: "$163.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Caesar Vance",
    id: 29,
    job: "Pre-Sales Support",
    companyName: "New York",
    invoiceNumber: "#CV21",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
    date: "2011/12/12",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$106.450,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Cara Stevens",
    id: 30,
    job: "Sales Assistant",
    companyName: "New York",
    invoiceNumber: "#TY46",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%</i>,
    date: "2011/12/06",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$145.600,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Cedric Kelly",
    id: 31,
    job: "Senior Javascript Developer",
    companyName: "Edinburgh",
    invoiceNumber: "#UH22",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2012/03/29",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$433.060,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Charde Marshall",
    id: 32,
    job: "Regional Director",
    companyName: "Google Co.",
    invoiceNumber: "#FV36",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2008/10/16",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$470.600,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Colleen Hurst",
    id: 33,
    job: "Javascript Developer",
    companyName: "Google Co.",
    invoiceNumber: "#NB39",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">2.8%</i>,
    date: "2009/09/15",
    priority: <span className="badge badge-light-warning">Medium</span>,
    budget: "$205.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Dai Rios",
    id: 34,
    job: "Personnel Lead",
    companyName: "Edinburgh",
    invoiceNumber: "#YT35",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
    date: "2012/09/26",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$217.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Donna Snider",
    id: 35,
    job: "Customer Support",
    companyName: "New York",
    invoiceNumber: "#GD27",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%</i>,
    date: "2011/01/25",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$112.000,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Doris Wilder",
    id: 36,
    job: "Sales Assistant",
    companyName: "Sidney",
    invoiceNumber: "#BH23",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2010/09/20",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$85.600,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Finn Camacho",
    id: 37,
    job: "Support Engineer",
    companyName: "Google Co.",
    invoiceNumber: "#YU47",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2009/07/07",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$87.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Fiona Green",
    id: 38,
    job: "Chief Operating Officer (COO)",
    companyName: "Infosys Ltd.",
    invoiceNumber: "#GF48",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
    date: "2010/03/11",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$850.000,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Garrett Winters",
    id: 39,
    job: "Accountant",
    companyName: "Edinburgh",
    invoiceNumber: "#FG63",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2011/07/25",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$170.750,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Gavin Cortez",
    id: 40,
    job: "Team Leader",
    companyName: "Google Co.",
    invoiceNumber: "#SW22",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2008/10/26",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$235.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Gavin Joyce",
    id: 41,
    job: "Developer",
    companyName: "Edinburgh",
    invoiceNumber: "#TH42",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
    date: "2010/12/22",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$92.575,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Airi Satou",
    id: 42,
    job: "Accountant",
    companyName: "Google Inc.",
    invoiceNumber: "#TY33",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>,
    date: "2008/11/28",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$162.700,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Bruno Nash",
    id: 43,
    job: "Software Engineer",
    companyName: "Tata Co.",
    invoiceNumber: "#UY38",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">1.4%</i>,
    date: "2011/05/03",
    priority: <span className="badge badge-light-warning">Medium</span>,
    budget: "$163.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Gavin Cortez",
    id: 44,
    job: "Team Leader",
    companyName: "Google Co.",
    invoiceNumber: "#SW22",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2008/10/26",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$235.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Finn Camacho",
    id: 45,
    job: "Support Engineer",
    companyName: "Google Co.",
    invoiceNumber: "#YU47",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2009/07/07",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$87.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Doris Wilder",
    id: 46,
    job: "Sales Assistant",
    companyName: "Sidney",
    invoiceNumber: "#BH23",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2010/09/20",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$85.600,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Airi Satou",
    id: 47,
    job: "Accountant",
    companyName: "Google Inc.",
    invoiceNumber: "#TY33",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>,
    date: "2008/11/28",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$162.700,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Charde Marshall",
    id: 48,
    job: "Regional Director",
    companyName: "Google Co.",
    invoiceNumber: "#FV36",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2008/10/16",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$470.600,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Colleen Hurst",
    id: 49,
    job: "Javascript Developer",
    companyName: "Google Co.",
    invoiceNumber: "#NB39",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">2.8%</i>,
    date: "2009/09/15",
    priority: <span className="badge badge-light-warning">Medium</span>,
    budget: "$205.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Dai Rios",
    id: 50,
    job: "Personnel Lead",
    companyName: "Edinburgh",
    invoiceNumber: "#YT35",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
    date: "2012/09/26",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$217.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Gavin Cortez",
    id: 51,
    job: "Team Leader",
    companyName: "Google Co.",
    invoiceNumber: "#SW22",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2008/10/26",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$235.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Finn Camacho",
    id: 52,
    job: "Support Engineer",
    companyName: "Google Co.",
    invoiceNumber: "#YU47",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2009/07/07",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$87.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Doris Wilder",
    id: 53,
    job: "Sales Assistant",
    companyName: "Sidney",
    invoiceNumber: "#BH23",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2010/09/20",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$85.600,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Airi Satou",
    id: 54,
    job: "Accountant",
    companyName: "Google Inc.",
    invoiceNumber: "#TY33",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>,
    date: "2008/11/28",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$162.700,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Charde Marshall",
    id: 55,
    job: "Regional Director",
    companyName: "Google Co.",
    invoiceNumber: "#FV36",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2008/10/16",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$470.600,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    name: "Colleen Hurst",
    id: 56,
    job: "Javascript Developer",
    companyName: "Google Co.",
    invoiceNumber: "#NB39",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">2.8%</i>,
    date: "2009/09/15",
    priority: <span className="badge badge-light-warning">Medium</span>,
    budget: "$205.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },

  {
    name: "Dai Rios",
    id: 57,
    job: "Personnel Lead",
    companyName: "Edinburgh",
    invoiceNumber: "#YT35",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
    date: "2012/09/26",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$217.500,00",
    action: (
      <ul className="action">
        <li className="edit">
          <Link href={Href}>
            <i className="icon-pencil-alt" />
          </Link>
        </li>
        <li className="delete">
          <Link href={Href}>
            <i className="icon-trash" />
          </Link>
        </li>
      </ul>
    ),
  },
];

export const DeleteDataColumn = [
  {
    name: "Employee Name",
    selector: (row: DeleteRowData) => row["name"],
    sortable: true,
  },
  {
    name: "Job Designation",
    selector: (row: DeleteRowData) => row["job"],
    sortable: true,
  },
  {
    name: "Company Name",
    selector: (row: DeleteRowData) => row["companyName"],
    sortable: true,
  },
  {
    name: "Credit/Debit",
    cell: (row: DeleteRowData) => row["credit"],
    sortable: true,
  },
  {
    name: "Date",
    selector: (row: DeleteRowData) => row["date"],
    sortable: true,
  },
  {
    name: "Priority",
    cell: (row: DeleteRowData) => row["priority"],
    sortable: true,
  },
  {
    name: "Budget",
    selector: (row: DeleteRowData) => row["budget"],
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: DeleteRowData) => row["action"],
    sortable: true,
  },
];

export const AddRowData = [
  {
    column1: 101,
    column2: 10.2,
    column3: 10.3,
    column4: 10.4,
    column5: 10.5,
  },
  {
    column1: 111,
    column2: 11.2,
    column3: 11.3,
    column4: 11.4,
    column5: 11.5,
  },
  {
    column1: 121,
    column2: 12.2,
    column3: 12.3,
    column4: 12.4,
    column5: 12.5,
  },
];

export const AddRowColumn = [
  {
    name: "Column1",
    selector: (row: AddRowsTable) => row.column1,
    sortable: true,
  },
  {
    name: "Column2",
    selector: (row: AddRowsTable) => row.column2,
    sortable: true,
  },
  {
    name: "Column3",
    selector: (row: AddRowsTable) => row.column3,
    sortable: true,
  },
  {
    name: "Column4",
    cell: (row: AddRowsTable) => row.column4,
    sortable: true,
  },
  {
    name: "Column5",
    cell: (row: AddRowsTable) => row.column5,
    sortable: true,
  },
];
