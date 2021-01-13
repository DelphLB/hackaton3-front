import HomePage from "./components/homepage/HomePage";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
