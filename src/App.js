import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Heander';
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <Header />
      <Dashboard></Dashboard>
      <GlobalStyle />
    </>
  );
}

export default App;
