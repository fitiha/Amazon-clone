import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if(user){
            auth.signOut()
        }
    }

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_8._V515060851_.jpg" alt="AdImage" />
                <h3 onLoadedData={handleAuthentication}>Hello {user?.email}</h3>
                <h2 className="checkout_title">Your shopping basket</h2>
                {basket.map((item) => (
                    <CheckoutProduct
                        key={item.id} 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
