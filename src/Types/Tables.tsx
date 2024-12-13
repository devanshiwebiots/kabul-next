interface DetailsTableProp {
    text?: string;
    code?: string;
  }
  
  interface DataTableProp {
    title: string;
    tdClassName?: string;
    tableColData?: JSX.Element;
    details: DetailsTableProp[];
  }
  
  export interface CommonTableComponentProp {
    title: string;
    tableClass?: string;
    tdClassName?: string;
    tableColData?: JSX.Element;
    data: DataTableProp[];
  }