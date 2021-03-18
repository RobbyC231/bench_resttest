const TotalColumn = ({style, value, isOdd}) => {
    const totalColumnStyle = {
        textAlign:  'right',
        fontSize: 'small',
    }
    
    return (
      <div style={{...style, ...totalColumnStyle}}> 
          {value ? new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(value) : ""}
      </div>
    );
  }
  
  export default TotalColumn;