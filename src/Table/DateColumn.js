

const DateColumn = ({style, text, isOdd}) => {
    const dateColumnStyle = {
        flexGrow: '1',
        fontSize: 'small',
        color: isOdd ? 'rgb(9,139,140)' :  'rgb(185,185,186)'
    }


    return (
      <div style={{...style, ...dateColumnStyle}}> 
          {text}
      </div>
    );
  }
  
  export default DateColumn;