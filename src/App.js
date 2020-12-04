import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";
import Hompage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";


class App extends Component  {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  // class propety that will unsubscribe from firebase auth to avoid memory leaks
  unsubscribeFromAuth = null;

 componentDidMount() {
   //does have to re-render the page, it jst monitors if a user is authenticated or not
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
     this.setState({currentUser: user})

     console.log(user);
   })
 }

 componentWillUnmount() {
    this.unsubscribeFromAuth()
 }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Hompage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
