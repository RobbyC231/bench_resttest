const CompanyColumn = ({style, text, isOdd}) => {
    const companyColumnStyle = { 
        flexGrow: '3',
        fontSize: 'small',
        color: isOdd ? 'rgb(9,139,140)' :  'rgb(68,68,74)'
    }

    return (
      <div style={{...style, ...companyColumnStyle}}> 
          {text}
      </div>
    );
  }
  
  export default CompanyColumn;