import TableHeader from "./TableHeader";
import { useEffect, useState } from "react";
import { sumTotalValue, generateRows } from "./Helpers/tableCreation";

const tableStyle = {
  padding: "25px",
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

      const totalValue = sumTotalValue(flatPagedData);
      setTotalValue(totalValue);
      setTransactions(flatPagedData);
    };

    fetchData();
  }, []);

  return (
    <div style={tableStyle}>
      <TableHeader totalValue={totalValue} />
      {transactions && generateRows(transactions)}
    </div>
  );
};

export default Table;
