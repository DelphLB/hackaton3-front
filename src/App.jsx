import HomePage from "./components/homepage/HomePage";
import { Route, Switch } from "react-router";
import VideoChat from "./video/VideoChat";
import "./App.css";
import NavBar from "./navbar/NavBar";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/videoChat' component={VideoChat} />
      </Switch>
    </div>
  );
}

export default App;
