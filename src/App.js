import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter/AppRouter";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <AppRouter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
