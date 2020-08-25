import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Index from "./pages/Index";
import Terminals from "./pages/Terminals";
import Buyers from "./pages/Buyers";
import Buyer from "./pages/Buyer";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>

        <Route>
          <MainLayout>
            <Switch>
              <Route exact path="/terminals">
                <Terminals />
              </Route>

              <Route exact path="/buyers">
                <Buyers />
              </Route>

              <Route exact path="/buyers/:id">
                <Buyer />
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
