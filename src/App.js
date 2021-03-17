import Header from "./Ui/Header.js";
import Table from "./Table/Table.js"
import { React } from 'react';

const appStyle = {
  backgroundColor: 'rgb(239,237,232)',
  height: '100vh',
  minHeight: '100vh'
}

const FAKE_TRANSACTION_DATA =
  {
    "totalCount": 32, // Integer, total number of transactions across all pages
    "page": 1, // Integer, current page
    "transactions": [
      {
        "Date": "2013-12-22", // String, date of transaction
        "Ledger": "Phone & Internet Expense", // String, ledger name
        "Amount": "-110.71", // String, amount
        "Company": "SHAW CABLESYSTEMS CALGARY AB" // String, company name
      },
      {
        "Date": "2013-12-22", // String, date of transaction
        "Ledger": "Phone & Internet Expense", // String, ledger name
        "Amount": "-110.71", // String, amount
        "Company": "SHAW CABLESYSTEMS CALGARY AB" // String, company name
      },
      {
        "Date": "2013-12-22", // String, date of transaction
        "Ledger": "Phone & Internet Expense", // String, ledger name
        "Amount": "-110.71", // String, amount
        "Company": "SHAW CABLESYSTEMS CALGARY AB" // String, company name
      }
    ]
  }

const App = () => {
  return (
    <div style={appStyle}>
      <Header />
      <Table transactions={FAKE_TRANSACTION_DATA}/>
    </div>
    
  );
};

export default App;