import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Routes from "./components/Routes";
import HeaderNav from "./components/Navbar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderNav />
        <Jumbotron />
        <Switch>
          <Route component={Routes} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
