const AccountColumn = ({style, text, isOdd}) => {
    const accountColumnStyle = {
        flexGrow: '3',
        fontSize: 'small',
    }

    return (
      <div style={{...style, ...accountColumnStyle}}> 
          {text}
      </div>
    );
  }
  
  export default AccountColumn;