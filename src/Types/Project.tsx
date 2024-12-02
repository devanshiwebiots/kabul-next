import { FormikErrors, FormikTouched } from "formik";

export type ProjectListData = {
    title: string;
    badge: string;
    sites: string;
    description: string;
    issue: string;
    resolved: string;
    comment: string;
    like: string;
    progress: number;
    customer_images: string[];
  };
  
  export interface ProjectType {
    activeTab: string;
    createdFormData: ProjectListData[];
  }

  export interface CommonProjectInterface {
    item: ProjectListData;
  }

  export interface ProjectInitialValue {
    title: string;
    client: string;
    progress: number;
    type: string;
    priority: string;
    size: string;
    description: string;
  }

  interface FormValues {
    title: string;
    client: string;
    progress:number;
    description:string;
  }

  export interface FormTypes {
    errors: FormikErrors<FormValues>;
    touched: FormikTouched<FormValues>;
  }