import { CleaveInputType } from "@/Types/Forms";
import Cleave from "cleave.js";
import { useEffect, useRef } from "react";
import { Input } from "reactstrap";

const CleaveInput: React.FC<CleaveInputType> = ({ className, options, placeholder }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            new Cleave(inputRef.current, options);
        }
    }, [options]);

    return <Input innerRef={inputRef} className={className} placeholder={placeholder} />;
};

export default CleaveInput;