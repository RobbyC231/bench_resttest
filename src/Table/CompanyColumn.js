const CompanyColumn = ({style, text, isOdd}) => {
    const companyColumnStyle = { 
        flexGrow: '3',
        fontSize: 'small',
    }

    return (
      <div style={{...style, ...companyColumnStyle}}> 
          {text}
      </div>
    );
  }
  
  export default CompanyColumn;