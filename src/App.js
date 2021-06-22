import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Container from "react-bootstrap/Container";
import { Provider } from "react-redux";
import store from "./store/store";
// UTILS
import PrivateRoute from "./utils/PrivateRoute";
// COMPONENTS
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
// ADMIN
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/admin/Login";
import Post from './pages/admin/Post'
// PAGES
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* <Alert /> */}

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />

          <Route exact path="/login" component={Login} />
          {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path='/post/:id' component={Post} />

          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
