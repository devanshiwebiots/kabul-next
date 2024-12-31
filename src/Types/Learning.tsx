export interface BlogDetailsProp {
  text: string;
  title: string
}

export interface CommonLearningHeaderProp {
  heading: string
  isOpen: boolean
  setIsOpen: (parameter: boolean) => void;
}

interface CategoryList {
  learningHeading?: string;
  DevelopmentHeading?: string;
  badgeNumber: number | string;
}

export interface CategoryListProps {
  title: string;
  data: CategoryList[];
  className?: string;
}

export interface UserCommentPropsType {
  ImageSrc: string;
  text: string;
  userReplay?: boolean;
}
