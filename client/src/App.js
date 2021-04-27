import React from 'react';
import Navbar from './components/layouts/Navbar';
import Header from './components/layouts/Header';
import Invoices from './components/invoices/Invoices';
import InvoiceState from './context/invoice/InvoiceState';
import DarkState from './context/dark/DarkState';
// import AlertState from './context/alert/AlertState';
import './App.scss';

const App = () => {
  return (
    <div id='main-app'>
      <InvoiceState>
        <DarkState>
          {/* <AlertState> */}
          <Navbar />
          <Header />
          <Invoices />
          {/* </AlertState> */}
        </DarkState>
      </InvoiceState>
    </div>
  );
};

export default App;
