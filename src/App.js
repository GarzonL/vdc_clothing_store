import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

import './App.css';
import Prueba from './pages/Prueba';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/port" component={Prueba} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
