import { ReactNode } from "react";

interface HeadDataProp {
    id: number;
    head: string;
}

export interface CommonTableProp {
    tableClass?: string;
    strip?: boolean;
    caption?: string;
    size?: string;
    hover?: boolean;
    headClass?: string;
    headRowClass?: string;
    headData: HeadDataProp[];
    children: ReactNode;
    classname?: string
}