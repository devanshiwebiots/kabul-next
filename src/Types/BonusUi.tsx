interface Child {
    colClass: string;
    color: string;
    date: string;
    header: string;
    paragraph: string;
    verticalLine1?: string;
    verticalLine2?: string;
}

export interface HorizontalTimelineProp {
    mainClass: string;
    child: Child[];
}