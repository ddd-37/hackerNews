import React from "react";
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import News from "./../HeaderLinks/News/News";
import New from "./../HeaderLinks/New/New";
import Ask from "./../HeaderLinks/Ask/Ask";
import Comments from "./../HeaderLinks/Comments/Comments";
import Jobs from "./../HeaderLinks/Jobs/Jobs";
import Past from "./../HeaderLinks/Past/Past";
import Submit from "./../HeaderLinks/Submit/Submit";
import User from "../UI/User/User";

const AppRouter = () => (
  <Switch>
    <Route exact path="/">
      <News />
    </Route>
    <Route path="/news">
      <News />
    </Route>
    <Route path="/new">
      <New />
    </Route>
    <Route path="/ask">
      <Ask />
    </Route>
    <Route path="/comments">
      <Comments />
    </Route>
    <Route path="/jobs">
      <Jobs />
    </Route>
    <Route path="/past">
      <Past />
    </Route>
    <Route path="/submit">
      <Submit />
    </Route>
    <Route exact path="/user/:userId" component={User} />
    <Route exact path="/*">
      <div>Unknown.</div>
    </Route>
  </Switch>
);

export default AppRouter;
