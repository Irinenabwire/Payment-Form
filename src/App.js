import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Bills from './components/pages/Bills';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';


function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/about' component={About} />
          <Route path='/bills' component={Bills} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          

         
          
        </Switch>
      </Router>
      <div className="container">
       
        </div>
    </>
  );
}

export default App;
