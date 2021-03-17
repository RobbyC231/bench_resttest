import TableHeader from "./TableHeader";
import Row from "./Row";
import { useEffect, useState } from "react";

const tableStyle = {
  margin: "25px",
};

const generateRows = (transactions) => {
  return transactions.map((transaction, count) => (
    <Row transaction={transaction} isOdd={Boolean(count % 2)} />
  ));
};

const sumTotalValue = (transactions, setTotalValue) => {
  var totalValue = 0;

  transactions.forEach((transaction) => {
    totalValue = totalValue + parseInt(transaction.Amount);
  });

  setTotalValue(totalValue);
};

const Table = () => {
  const [transactions, setTransactions] = useState();
  const [totalValue, setTotalValue] = useState();

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

      const flatPagedData = pagedData.flat();

      sumTotalValue(flatPagedData, setTotalValue);
      setTransactions(flatPagedData);
    };

    fetchData();
  }, []);

  return (
    <div style={tableStyle}>
      <TableHeader totalValue={totalValue} />
      {transactions && generateRows(transactions, totalValue, setTotalValue)}
    </div>
  );
};

export default Table;
