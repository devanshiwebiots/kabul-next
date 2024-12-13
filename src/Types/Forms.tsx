import { SpanType } from "./Common";

export interface CommonTouchspinProp {
    color: string;
    id?: number;
    value: number;
    outline?: boolean;
    faAngle?: boolean;
    onDecrement: VoidFunction;
    onIncrement: VoidFunction;
    btnClass?: string;
}

export interface CommonSwitchProp {
    defaultChecked?: boolean;
    color?: string;
    disabled?: boolean;
}

export interface CommonSwitchSpanProp {
    color: string;
    defaultChecked?: boolean;
}

interface TypeAheadOptions {
    name: string;
    header?: boolean;
    divider?: boolean;
}

export interface TypeAheadCardProps {
    title: string;
    span: SpanType[]
    id: string;
    options: string[] | TypeAheadOptions[];
    placeholder: string;
    multiple?: boolean;
    align?: string ;
}