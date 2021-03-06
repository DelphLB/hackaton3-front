import HomePage from "./components/homepage/HomePage";
import { Route, Switch } from "react-router";

import VideoChat from "./video/VideoChat";
import ScrollToTop from './components/SrollToTop';

import "./App.css";
import Recettes from "./components/recettes/Recettes";
import AddRecettes from "./components/recettes/AddRecettes";
import SignIn from "./components/SignIn";
import ConnectPage from "./components/ConnectPage";
import NavBar from "./components/navbar/NavBar";
import PostLive from "./components/homepage/PostLive";
import SignUp from "./components/SignUp";
import Footer from "./components/footer/Footer";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/videoChat/:name" component={VideoChat} />
        <Route path="/recettes" component={Recettes} />
        <Route path="/nouvellerecette" component={AddRecettes} />
        <Route exact path="/connection" component={SignUp} />
        <Route exact path="/inscription" component={SignIn} />
        <Route exact path="/connectPage" component={ConnectPage} />
        <Route exact path="/nouveauLive" component={PostLive} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
