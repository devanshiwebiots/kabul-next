import { Description, No, Quantity, Subtotal, UnitePrice } from "@/Constant";

const Invoice5TableHeader = () => {
  return (
    <tr style={{ background: "var(--theme-default)" }}>
      <th style={{ padding: "18px 15px", textAlign: "center", position: "relative", borderTopLeftRadius: 10, border:"none" }} >
        <span style={{ color: "#fff",fontSize: 18, fontWeight: 600}} >{No}</span>
      </th>
      <th style={{ padding: "18px 16px", textAlign: "left", border:"none" }}>
        <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }} >{Description}</span>
      </th>
      <th style={{ padding: "18px 15px", textAlign: "center", border:"none" }}>
        <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }} >{UnitePrice}</span>
      </th>
      <th style={{ padding: "18px 15px", textAlign: "center", border:"none" }}>
        <span style={{ color: "#fff", fontSize: 18, fontWeight: 600}}>{Quantity}</span>
      </th>
      <th style={{ padding: "18px 15px", textAlign: "center", position: "relative", borderTopRightRadius: 10, border:"none" }} >
        <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }} >{Subtotal}</span>
      </th>
    </tr>
  );
};

export default Invoice5TableHeader;
