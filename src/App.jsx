import HomePage from "./components/homepage/HomePage";
import { Route, Switch } from "react-router";
import VideoChat from "./video/VideoChat";
import "./App.css";
import Login from "./components/Login";
import ConnectPage from "./components/ConnectPage";
import NavBar from "./components/navbar/NavBar";
import PostLive from "./components/homepage/PostLive";
import Footer from "./components/footer/Footer"
import Recettes from "./components/recettes/Recettes";
import AddRecettes from "./components/recettes/AddRecettes";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/videoChat' component={VideoChat} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/connectPage' component={ConnectPage} />
        <Route exact path='/recettes' component={Recettes} />
        <Route exact path='/nouveauLive' component={PostLive} />
        <Route exact path='/nouvellerecette' component={AddRecettes} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
