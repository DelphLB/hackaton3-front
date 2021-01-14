import HomePage from "./components/homepage/HomePage";
import { Route, Switch } from "react-router";

import VideoChat from "./video/VideoChat";


import "./App.css";
import Recettes from "./components/recettes/Recettes";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/videoChat' component={VideoChat} />
        <Route path='/recettes' component={Recettes} />
      </Switch>
    </div>
  );
}

export default App;
