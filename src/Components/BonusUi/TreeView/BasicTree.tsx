import TreeView, { flattenTree } from "react-accessible-treeview";
import { FaCheckSquare, FaMinusSquare, FaSquare } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicTreesProp } from "@/Types/BonusUi";
import { BasicTreeSubTitle, SimpleTreeviewData } from "@/Data/BonusUi/TreeView";
import { BasicTreeTitle } from "@/Constant";

export const CheckBoxIcon: React.FC<BasicTreesProp> = ({ variant, ...rest }) => {
    switch (variant) {
        case "all":
            return <FaCheckSquare color="var(--theme-default)" {...rest} />;
        case "none":
            return <FaSquare color="white" {...rest} style={{ border: "1px solid #80808069" }} />;
        case "some":
            return <FaMinusSquare {...rest} color="var(--theme-default)" />;
        default:
            return null;
    }
};

const BasicTree = () => {
    const treeData = flattenTree(SimpleTreeviewData);

    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader title={BasicTreeTitle} span={BasicTreeSubTitle} />
                <CardBody>
                    <div className="tree-container">
                        <div className="checkbox">
                            <TreeView
                                data={treeData}
                                aria-label="Checkbox tree"
                                multiSelect
                                propagateSelect
                                propagateSelectUpwards
                                togglableSelect
                                defaultSelectedIds={[4, 9]}
                                expandedIds={[1, 2, 6, 10, 14, 27]}
                                nodeRenderer={({ element, isBranch, isExpanded, isSelected, isHalfSelected, getNodeProps, level, handleSelect, handleExpand }) => {
                                    return (
                                        <div {...getNodeProps({ onClick: handleExpand })} style={{ marginLeft: 40 * (level - 1), marginTop: 5 }} className="d-flex align-items-center">
                                            {isBranch && (isExpanded ? <IoMdArrowDropdown /> : <IoMdArrowDropright />)}
                                            <CheckBoxIcon
                                                className="checkbox-icon "
                                                onClick={(e: any) => {
                                                    handleSelect(e);
                                                    e.stopPropagation();
                                                }}
                                                variant={isHalfSelected ? "some" : isSelected ? "all" : "none"}
                                            />
                                            <span className="name">&nbsp;{element.name}</span>
                                        </div>
                                    );
                                }}
                            />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};

export default BasicTree;