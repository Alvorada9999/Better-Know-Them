import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/Landing Page/LandingPage";
import GameRoom from "./components/Game Room/GameRoom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/room/:roomId" component={GameRoom} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
