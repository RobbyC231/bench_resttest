

const DateColumn = ({style, text, isOdd}) => {
    const dateColumnStyle = {
        flexGrow: '1',
        fontSize: 'small',
    }


    return (
      <div style={{...style, ...dateColumnStyle}}> 
          {text}
      </div>
    );
  }
  
  export default DateColumn;