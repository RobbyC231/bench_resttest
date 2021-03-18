import TableHeader from "./TableHeader";
import { useEffect, useState } from "react";
import { sumTotalValue, generateRows } from "./Helpers/tableCreation";

const INITIAL_FETCH_URL = `https://resttest.bench.co/transactions/1.json`;

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
        // make initial fetch to get total count of transactions and
        // transactions per page
        const initialFetch = await fetch(INITIAL_FETCH_URL);
        const data = await initialFetch.json();
        pagedData.push(data.transactions);

        const transactionsTotalCount = data.totalCount;
        const transactionsPerPage = data.transactions.length
        
        // dividing total count of transactions by limit of transactions
        // per page to get total number of pages
        const numberOfPages = Math.ceil(
          transactionsTotalCount / transactionsPerPage
        );

        for (let index = 2; index <= numberOfPages; index++) {
          const secondFetch = await fetch(
            `https://resttest.bench.co/transactions/${index}.json`
          );
          const data = await secondFetch.json();
          pagedData.push(data.transactions);
        }
      } catch (error) {
        console.error("Error on fetch", error);
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
