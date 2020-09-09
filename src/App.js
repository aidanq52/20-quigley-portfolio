import React from 'react';
import './App.css';
import About from './pages/About';
import PortfolioNavbar from "./components/header"
import Footer from './components/footer';
import Portfolio from './pages/Portfolio';
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <PortfolioNavbar/>
        <Route exact path="/" component={About}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
