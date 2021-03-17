import { render, screen } from '@testing-library/react';
import Table from '../Table/Table';

test('renders rows given transaction row', () => {
  const TRANSACTION_DATA = 
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
  
  render(<Table transactions={TRANSACTION_DATA} />);


  
});
