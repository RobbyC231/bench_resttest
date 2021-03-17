

const DateColumn = ({style, text, isHeader}) => {
    const dateColumnStyle = {
        flexGrow: '1',
        fontSize: 'small',
    }

    var dateOptions = {year: 'numeric', month: 'short', day: 'numeric' };

    return (
      <div style={{...style, ...dateColumnStyle}}> 
          {isHeader ? `${text}` : `${new Intl.DateTimeFormat('en-US', dateOptions).format(Date.parse(text))}`}
      </div>
    );
  }
  
  export default DateColumn;