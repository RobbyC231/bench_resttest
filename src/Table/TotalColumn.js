const TotalColumn = ({style, value, isOdd}) => {
    const totalColumnStyle = {
        flexGrow: '1',
        textAlign:  'right',
        fontSize: 'small',
        color: isOdd ? 'rgb(9,139,140)' :  'rgb(68,68,74)'
    }

    return (
      <div style={{...style, ...totalColumnStyle}}> 
          {value}
      </div>
    );
  }
  
  export default TotalColumn;