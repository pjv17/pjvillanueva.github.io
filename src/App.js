import React from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import Footer from "./components/Footer"

function App() {
  return (
    
    <div className="pj-villanueva-portfolio">
        <Header/>
        <Main/>
        <Section/>
        <Footer />
    </div>
  );
}

export default App;
