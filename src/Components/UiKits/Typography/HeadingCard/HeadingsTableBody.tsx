import React from "react";
import { Heading } from "@/Constant";
import { HeadingCardData } from "@/Data/UiKits/Typography";

const HeadingsTableBody = () => {
  return (
    <tbody>
      {HeadingCardData?.map((row, index) => {
        const Tag = row.tag as keyof JSX.IntrinsicElements;
        return (
          <tr key={index}>
            <td className={row.className}>
              <code>&lt;{row.tag}&gt;&lt;/{row.tag}&gt;</code>
            </td>
            <td className={row.className}>
              <Tag className="mb-0">{row.size}</Tag>
            </td>
            <td className={row.className}>
              <Tag><span>{Heading} {index + 1} {row.label}</span></Tag>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default HeadingsTableBody;
