const headerStyle = {
    backgroundColor: 'rgb(9,139,140)',
    paddingTop: '25px',
    paddingBottom: '25px',
    display: 'flex',
    justifyContent: 'center'
};

const textStlye = {
    color: 'rgb(238,247,247)'
}

const Header = () => {
  return (
    <div style={headerStyle}> 
        <div style={textStlye}>Bench Test</div>
    </div>
  );
}

export default Header;