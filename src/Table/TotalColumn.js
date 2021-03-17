const TotalColumn = ({style, value, isOdd}) => {
    const totalColumnStyle = {
        flexGrow: '1',
        textAlign:  'right',
        fontSize: 'small',
    }

    return (
      <div style={{...style, ...totalColumnStyle}}> 
          {value}
      </div>
    );
  }
  
  export default TotalColumn;