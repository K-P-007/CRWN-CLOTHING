import React from "react";
import "./App.css";
import HomePage from "./pages/Homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
