import React from 'react';
import {BrowserRouter as BR, Switch, Route} from "react-router-dom"
import './styles/App.css';
import './styles/main.scss'

import NavBar from './navigation/navigation-comp'
import Home from './pages/home'
import Conv from './pages/conversations'
import Login from './pages/login'
import SignUp from './pages/signup'

function App() {
  return (
    <div className="App">
     <BR>
     <NavBar />

     <Switch>
      <Route exact path="/" component={Home}/>
      <Route path='/conversations' component={Conv}/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={SignUp}/>
      


     </Switch>
     
     </BR>
    </div>
  );
}

export default App;
