import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Home from "../pages/Home";
import About from "../pages/About";
// import NotFound from '../layout/NotFound';
// import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
  return (
    <div className='layout'>
     <Container className='layout__container'>
      {/* <Alert /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        {/* <Route exact path='/profile/:id' component={Profile} /> */}
        {/* <PrivateRoute exact path='/posts/:id' component={Post} /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
     </Container>
    </div>
  );
};

export default Routes;
