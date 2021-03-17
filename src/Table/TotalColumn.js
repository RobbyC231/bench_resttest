const TotalColumn = ({style, value, isOdd}) => {
    const totalColumnStyle = {
        flexGrow: '1',
        textAlign:  'right',
        fontSize: 'small',
    }
    
    return (
      <div style={{...style, ...totalColumnStyle}}> 
          {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(value)}
      </div>
    );
  }
  
  export default TotalColumn;