import { Download, Href, PrintInvoice } from "@/Constant";
import { InvoicePrintType } from "@/Types/Ecommerce";
import Link from "next/link";
import React from "react";

const ActionButtons: React.FC<InvoicePrintType> = ({ handlePrint }) => {

  return (
    <span style={{ display: "flex", justifyContent: "flex-end", gap: 15 }}>
      <Link onClick={handlePrint} style={{ background: "var(--theme-default)", color: "rgba(255, 255, 255, 1)", borderRadius: 10, padding: "18px 27px", fontSize: 16, fontWeight: 600, outline: 0, border: 0, textDecoration: "none" }} href={Href}>
        {PrintInvoice}
        <i className="icon-arrow-right" style={{ fontSize: 13, fontWeight: "bold", marginLeft: 10, }} />
      </Link>
      <Link style={{ background: "rgba(103, 143, 48, 0.1)", color: "var(--theme-default)", borderRadius: 10, padding: "18px 27px", fontSize: 16, fontWeight: 600, outline: 0, border: 0, textDecoration: "none", }} href={Href}>
        {Download}
        <i className="icon-arrow-right" style={{ fontSize: 13, fontWeight: "bold", marginLeft: 10 }} />
      </Link>
    </span>
  );
};

export default ActionButtons