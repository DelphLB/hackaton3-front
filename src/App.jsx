import HomePage from "./components/homepage/HomePage";
import { Route, Switch } from "react-router";
import VideoChat from "./VideoChat";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/videoChat" component={VideoChat} />
      </Switch>
    </div>
  );
}

export default App;
