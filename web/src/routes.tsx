import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* exact: para que pegue somente a url que tenha exatamente o que está no path */}
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OrphanagesMap}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;