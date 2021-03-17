import CompanyColumn from "./CompanyColumn";
import DateColumn from "./DateColumn";
import AccountColumn from "./AccountColumn";
import TotalColumn from "./TotalColumn";

const tableHeaderStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 3fr 3fr 1fr",
  backgroundColor: "rgb(255,255,255)",
  padding: "15px",
};

const textStyle = {
  color: "rgb(23,163,166)",
};

const TableHeader = ({ totalValue }) => {
  return (
    <div style={tableHeaderStyle}>
      <DateColumn style={textStyle} text={"Date"} isHeader={true} />
      <CompanyColumn style={textStyle} text={"Company"} />
      <AccountColumn style={textStyle} text={"Account"} />
      <TotalColumn style={textStyle} value={totalValue} />
    </div>
  );
};

export default TableHeader;
