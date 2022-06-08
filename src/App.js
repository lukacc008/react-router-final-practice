import { Route, Switch, Redirect } from "react-router-dom";

import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDeatil from "./components/pages/QuoteDetail";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
         <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDeatil />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
