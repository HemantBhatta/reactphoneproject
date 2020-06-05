import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import {ContextProvider} from './context'
import Detail from './components/Detail'
import Modal from './components/Modal'
import Cart from './Cart/Cart'
import Navbar from './components/Navbar'


function App() {
  return (
   <ContextProvider>
      <Router>
        <div className="main-section">
          <Navbar/>
          
          <Switch>
            <Route exact path= "/"  component={Home}/>
            <Route exact path= "/details"  component={Detail}/>
            <Route exact path= "/cart"  component={Cart}/>
          </Switch>

          <Modal/>
         
          </div>
    </Router>
  
   </ContextProvider>
  );
}

export default App;
