// Dependencies:
// npm install


import './App.css';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Menu from './components/Menu.js';
import Order from './components/Order.js';
import Account from './components/Account.js';
import About from './components/About.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container-app">
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/menu" element={<Menu/>} />
          <Route exact path="/order" element={<Order/>} />
          <Route exact path="/account" element={<Account/>} /> 
          <Route exact path="/about" element={<About/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
