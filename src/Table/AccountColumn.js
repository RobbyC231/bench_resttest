const AccountColumn = ({style, text, isOdd}) => {
    const accountColumnStyle = {
        flexGrow: '3',
        fontSize: 'small',
        color: isOdd ? 'rgb(9,139,140)' :  'rgb(185,185,186)'
    }

    return (
      <div style={{...style, ...accountColumnStyle}}> 
          {text}
      </div>
    );
  }
  
  export default AccountColumn;