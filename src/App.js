import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Hompage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Hompage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
