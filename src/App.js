import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import MainPage from "./layouts/mainPage";
import ChangeFormPage from "./layouts/changeFormPage";

function App() {
  return (
    <Switch>
      <Route path = "/" exact component={MainPage}/>
      <Route path = "/:type?" component={ChangeFormPage}/>
      {/* <Redirect from = "../:type?/" to = "/"/> */}
    </Switch>
  );
}

export default App;
