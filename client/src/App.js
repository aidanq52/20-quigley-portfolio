import React from 'react';
import './App.css';
import About from './pages/About';
import PortfolioNavbar from "./components/header"
import Footer from './components/footer';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <div className="App">
      <PortfolioNavbar/>
      {/* <About/> */}
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
