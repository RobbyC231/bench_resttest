import TableHeader from "./TableHeader";
import Row from "./Row";
import { useEffect, useState } from "react";

const tableStyle = {
  margin: "25px",
};

const generateRows = (transactions) => {
  console.log({ transactions });
  return transactions.map((transaction, count) => (
    <Row transaction={transaction} isOdd={Boolean(count % 2)} />
  ));
};

const Table = () => {
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const pagedData = [];

      try {
        for (let index = 1; true; index++) {
          const initialFetch = await fetch(
            `https://resttest.bench.co/transactions/${index}.json`
          );
          const data = await initialFetch.json();

          pagedData.push(data.transactions);
        }
      } catch (error) {
        console.log("Error on fetch", error);
      }
      setTransactions(pagedData.flat());
    };

    fetchData();
  }, []);

  return (
    <div style={tableStyle}>
      <TableHeader />
      {transactions && generateRows(transactions)}
    </div>
  );
};

export default Table;
