import React from "react";
import { SvgPath } from "@/Constant";
import { SvgType } from "@/Types/Common";

const SVG: React.FC<SvgType> = ({ iconId, className, style }) => {
  return (
    <svg className={className} style={style}>
      <use href={`${SvgPath}/icon-sprite.svg#${iconId}`}></use>
    </svg>
  );
};
export default SVG;
