import { CartTableHeader } from "@/Data/Ecommerce";

const TableHead = () => {
  return (
    <thead>
      <tr>
        {CartTableHeader?.map((items, i) => (
          <th key={i}>{items}</th>
        ))} 
      </tr>
    </thead>
  );
};

export default TableHead;
