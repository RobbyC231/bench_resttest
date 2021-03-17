import Header from "./Header.js";
import Table from "./Table/Table.js"
import { React } from 'react';

const appStyle = {
  backgroundColor: 'rgb(239,237,232)',
  height: '100vh',
  minHeight: '100vh'
}

const App = () => {
  return (
    <div style={appStyle}>
      <Header />
      <Table/>
    </div>
  );
};

export default App;