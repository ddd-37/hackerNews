import React from "react";
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import New from "../HeaderLinks/New/New";
import Ask from "./../HeaderLinks/Ask/Ask";
import Show from "./../HeaderLinks/Show/Show";
import Jobs from "./../HeaderLinks/Jobs/Jobs";
import User from "../UI/User/User";
import Top from "./../HeaderLinks/Top/Top";
import Best from "./../HeaderLinks/Best/Best";

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Top} />
    <Route path="/top" component={Top} />
    <Route path="/best" component={Best} />
    <Route path="/new" component={New} />
    <Route path="/ask" component={Ask} />
    <Route path="/show" component={Show} />
    <Route path="/jobs" component={Jobs} />
    <Route exact path="/user/:userId" component={User} />
    <Route exact path="/*">
      <div>Unknown.</div>
    </Route>
  </Switch>
);

export default AppRouter;
