import React, { Component } from 'react';
import {Route,Redirect ,Switch} from 'react-router-dom';
import Layout from "./hoc/Layout/Layout"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/" component={BurgerBuilder}/>
           
            {/* <Redirect from="/" to="/burgerbuilder"/> */}
          </Switch>
        </Layout>
        
      </div>
    );
  }
}

export default App;
