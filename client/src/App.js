import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Table from './components/Main/Table';
import Converter from './components/Main/Converter/Converter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Converter />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
