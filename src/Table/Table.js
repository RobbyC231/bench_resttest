import TableHeader from "./TableHeader";
import Row from './Row';

const tableStyle = {
  margin: '25px',
}


const generateRows = (transactions) => {
  return transactions.transactions.map((transaction, count) => (
    <Row transaction={transaction} isOdd={Boolean(count%2)} />
  ))
}

const Table = ({transactions}) => {
  return (
    <div style={tableStyle}> 
        <TableHeader/>
        {generateRows(transactions)}
    </div>
  );
}

export default Table;