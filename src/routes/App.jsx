import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Country from '../pages/Country';

const App = () => {

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/country/:name' component={Country} />
      </Switch> 
    </BrowserRouter>
  );
}

export default App;