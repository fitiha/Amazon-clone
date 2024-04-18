import React, {useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route 
  } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import "./App.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
//Stripe is used for handling payment things
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
    'pk_test_51OH4g6Lv5RztHMxO32tm027F9IXZVD0npBE0gwvciG6qy06cjvRsA1Qf3ciSkbmB56rjjE1wSTd9oQ8a1L8bz5tX00NrWDY3jk'
);

function App(){
    const [{}, dispatch] = useStateValue(); 
      useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log("THE USER IS >>> ", authUser);
    
            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, [dispatch]); // dispatch in the dependency array
    
    return (
        <Router>
            <div className="app"> 
            <Switch>

            {/* return the header and home page if the user requested for the root route */}
            <Route exact path="/"> 
                <Header />
                <Home />
            </Route>  

            {/* return the checkout page if the user requested for the checkout route */}
            <Route exact path="/login"> 
                <Login />
            </Route> 

            {/* return the checkout page if the user requested for the checkout route */}
            <Route exact path="/checkout"> 
                <Header />
                <Checkout />
            </Route> 
            
            {/* return the checkout page if the user requested for the checkout route */}
            <Route exact path="/payment"> 
                <Elements stripe={promise}>
                    <Payment />
                </Elements>
            </Route> 

            {/* return the 404 page if the user requested for a route that doesn't exist */}
            <Route path="/"> 
                <h1>404 page. You are on the wrong route.</h1>
            </Route> 

            </Switch>
            </div>
        </Router>
    );
}

export default App;