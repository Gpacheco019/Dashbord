import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Heander';
import { GlobalStyle } from './styles/global'

import {CavaleirosProvaider} from './context/cavaleiros'

function App() {
  return (
    <>
      <CavaleirosProvaider>
        <Header />
        <Dashboard></Dashboard>
        <GlobalStyle />
      </CavaleirosProvaider>
    </>
  );
}

export default App;
