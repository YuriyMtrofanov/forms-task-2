import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import MainPage from "./layouts/mainPage";
import CreatePage from "./layouts/createPage";

function App() {
  return (
    <Switch>
      <Route path = "/" exact component={MainPage}/>
      <Route path = "/:type?" component={CreatePage}/>
      {/* <Redirect from = "../users/" to = "/loading"/> */}
    </Switch>
  );
}

export default App;
