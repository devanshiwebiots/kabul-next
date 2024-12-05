import { BankTransfer, BankAccount, Code, Invoice } from "@/Constant";

const Invoice5Details = () => {
  return (
    <td>
      <h4 style={{ fontSize: 42, fontWeight: 600, color: "#000248", margin: "0 0 12px 0" }} >{Invoice}</h4>
      <span style={{ fontSize: 18, color: "var(--theme-default)", display: "block", fontWeight: 600, marginBottom: 20 }} >{BankTransfer}</span>
      <span style={{ color: "#000248", display: "block", marginBottom: 12, fontWeight: 600 }} >Leslie Alexander</span>
      <span style={{ display: "block", fontSize: 18, marginBottom: 12 }}>{BankAccount} : 0981234098765</span>
      <span style={{ display: "block", fontSize: 18, marginBottom: 12 }} >{Code} : LEF098756</span>
    </td>
  );
};

export default Invoice5Details;
