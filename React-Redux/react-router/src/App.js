import React, { Component } from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'

class App extends Component {
  render() {
    return (       
      <Router>
       <Navbar/>
       <Routes>          
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
       </Routes>
      </Router>
     
    );
  }
}
export default App;