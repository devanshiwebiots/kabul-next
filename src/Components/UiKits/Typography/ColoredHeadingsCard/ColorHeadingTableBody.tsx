import { ColorHeadingData } from "@/Data/UiKits/Typography";

const ColorHeadingTableBody = () => {
  return (
    <tbody>
      {ColorHeadingData?.map((row, index) => {
        const Tag = row.tag as keyof JSX.IntrinsicElements;
        return (
          <tr key={index}>
            <td className={row.className}>
              <code>&lt;{row.tag}&gt;&lt;/{row.tag}&gt;</code>
            </td>
            <td className={row.className}>
              <Tag className="m-0">
                <span className={`txt-${row.colorClass}`}>Heading 1</span> Sub Heading
              </Tag>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default ColorHeadingTableBody;
