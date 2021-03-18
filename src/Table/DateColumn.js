

const DateColumn = ({style, text, isHeader}) => {
    const dateColumnStyle = {
        fontSize: 'small',
    }

    const dateOptions = {year: 'numeric', month: 'short', day: 'numeric' };

    return (
      <div style={{...style, ...dateColumnStyle}}> 
          {isHeader ? `${text}` : `${new Intl.DateTimeFormat('en-US', dateOptions).format(Date.parse(text))}`}
      </div>
    );
  }
  
  export default DateColumn;