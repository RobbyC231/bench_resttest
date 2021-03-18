const AccountColumn = ({style, text, isOdd}) => {
    const accountColumnStyle = {
        fontSize: 'small',
    }

    return (
      <div style={{...style, ...accountColumnStyle}}> 
          {text}
      </div>
    );
  }
  
  export default AccountColumn;