import React from "react";
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import News from "./../News/News";
import New from "./../New/New";
import Ask from "./../Ask/Ask";
import Comments from "./../Comments/Comments";
import Jobs from "./../Jobs/Jobs";
import Past from "./../Past/Past";
import Submit from "./../Submit/Submit";

const AppRouter = () => (
  <Switch>
    <Route exact path="/">
      <News />
    </Route>
    <Route exact path="/news">
      <News />
    </Route>
    <Route exact path="/new">
      <New />
    </Route>
    <Route exact path="/ask">
      <Ask />
    </Route>
    <Route exact path="/comments">
      <Comments />
    </Route>
    <Route exact path="/jobs">
      <Jobs />
    </Route>
    <Route exact path="/past">
      <Past />
    </Route>
    <Route exact path="/submit">
      <Submit />
    </Route>
    <Route exact path="*">
      <div>Unknown.</div>
    </Route>
  </Switch>
);

export default AppRouter;
