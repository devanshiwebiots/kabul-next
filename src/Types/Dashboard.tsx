import { ReactNode } from "react";

export interface DashboardCommonHeaderType {
    title: string;
    tagClass?: string;
    dropDownFalse?: boolean;
    children?: ReactNode;
    classname?:string
    subtitle?:string
  }

  export interface NotificationListProps {
    image: string;
    name: string;
    action?: string;
    detail?: string;
    time: string;
    active: boolean;
    status?: string;
    buttons?: boolean;
    last?: boolean;
  }