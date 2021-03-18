const CompanyColumn = ({style, text, isOdd}) => {
    const companyColumnStyle = { 
        fontSize: 'small',
    }

    return (
      <div style={{...style, ...companyColumnStyle}}> 
          {text}
      </div>
    );
  }
  
  export default CompanyColumn;