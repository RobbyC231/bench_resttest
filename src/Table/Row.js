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
    const lightText = {
      color: isOdd ? 'rgb(9,139,140)' :  'rgb(185,185,186)'
    }

    const darkText = {
      color: isOdd ? 'rgb(9,139,140)' :  'rgb(68,68,74)'
    }


    return (
      <div style={rowStyle}> 
          <DateColumn text={transaction.Date} style={lightText} isHeader={false}/>
          <CompanyColumn text={transaction.Company} style={darkText}/>
          <AccountColumn text={transaction.Ledger} style={lightText}/>
          <TotalColumn value={transaction.Amount} style={darkText}/>
      </div>
    );
  }
  
  export default Row;