import { AllTaxesIncluded, BankTransfer, BankAccount, Code, TotalAmounts } from "@/Constant";

const Invoice3BankTransfer = () => {
  return (
    <>
      <td>
        <span style={{ color: "#52526C", fontSize: 16, fontWeight: 500, opacity: "0.8" }}>{BankTransfer}</span>
        <h4 style={{ fontWeight: 600, margin: "12px 0 5px 0", fontSize: 18, color: "var(--theme-default)" }}>Leslie Alexander</h4>
        <span style={{ color: "#52526C", display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400 }}>{BankAccount} : 0981234098765</span>
        <span style={{ color: "#52526C", lineHeight: "1.6", fontSize: 18, fontWeight: 400 }}>{Code} : LEF098756</span>
      </td>
      <td>
        <span style={{ color: "#52526C", fontSize: 16, fontWeight: 600, opacity: "0.8" }}>{TotalAmounts}</span>
        <h4 style={{ fontWeight: 600, margin: "12px 0 5px 0", fontSize: 26, color: "var(--theme-default)" }}>$175.00</h4>
        <span style={{ fontSize: 16, fontWeight: 400, lineHeight: "1.5" }}>{AllTaxesIncluded}</span>
      </td>
    </>
  );
};

export default Invoice3BankTransfer;
