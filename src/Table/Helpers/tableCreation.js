import Row from '../Row';

export const generateRows = (transactions) => {
    return transactions.map((transaction, count) => (
      <Row transaction={transaction} isOdd={Boolean(count % 2)} />
    ));
  };
  
 export const sumTotalValue = (transactions) => {
    var totalValue = 0;
  
    transactions.forEach((transaction) => {
      totalValue = totalValue + parseInt(transaction.Amount);
    });
  
    return totalValue
  };