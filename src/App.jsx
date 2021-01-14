import HomePage from "./components/homepage/HomePage";
import { Route, Switch } from "react-router";
import VideoChat from "./video/VideoChat";
import "./App.css";
import Login from "./components/Login";
import ConnectPage from "./components/ConnectPage";
import NavBar from "./components/navbar/NavBar";
import PostLive from "./components/homepage/PostLive";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/videoChat' component={VideoChat} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/connectPage' component={ConnectPage} />
        <Route exact path='/nouveauLive' component={PostLive} />
      </Switch>
    </div>
  );
}

export default App;
