import DateColumn from './DateColumn';
import CompanyColumn from './CompanyColumn';
import AccountColumn from './AccountColumn';
import TotalColumn from './TotalColumn';

const rowStyle = {
    display: 'flex',
    backgroundColor: 'rgb(251,250,249)',
    padding: '15px'
}

const Row = ({transaction, isOdd}) => {
    return (
      <div style={rowStyle}> 
          <DateColumn text={transaction.Date} isOdd={isOdd}/>
          <CompanyColumn text={transaction.Company} isOdd={isOdd}/>
          <AccountColumn text={transaction.Ledger} isOdd={isOdd}/>
          <TotalColumn value={transaction.Amount} isOdd={isOdd}/>
      </div>
    );
  }
  
  export default Row;