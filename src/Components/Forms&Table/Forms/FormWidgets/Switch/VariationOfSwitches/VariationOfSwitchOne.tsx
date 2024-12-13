import { VariationSwitchDataList } from "@/Data/Forms";
import React, { Fragment } from "react";
import { Input, Label } from "reactstrap";

const VariationOfSwitchOne = () => {
  return (
    <>
      {VariationSwitchDataList?.map(({ id, inputClass, text,offData,onData }, index) => (
        <Fragment key={index}>
          <li className="tg-list-item">
            <Input className={`tgl tgl-${inputClass}`} id={`cb${id}`} type="checkbox" />
            <Label className="tgl-btn" data-tg-off={offData} data-tg-on={onData} htmlFor={`cb${id}`}></Label>
          </li>
          <li>
            <p>{text}</p>
          </li>
        </Fragment>
      ))}
    </>
  );
};

export default VariationOfSwitchOne;
