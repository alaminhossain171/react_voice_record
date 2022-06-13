import React from 'react'
import Pack1 from './components/Pack1'
// import Pack2 from './components/Pack2'
// import Pack3 from './components/Pack3'

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Pack2 from './components/Pack2';
import Pack3 from './components/Pack3';
import FinalPack from './components/FinalPack';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={Pack1} />
      <Route exact path='/pack2' component={Pack2} />
      <Route exact path='/pack3' component={Pack3} />
      <Route exact path='/final' component={FinalPack} />
    </Switch>
    
    </Router>
  )
}

export default App