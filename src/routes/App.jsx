import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Layouts
import Layout from '../layouts/Layout';

// Pages
import Home from '../pages/Home';
import Country from '../pages/Country';

const App = () => {

  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/country/:name' component={Country} />
        </Switch> 
      </Layout>
    </BrowserRouter>
  );
}

export default App;
