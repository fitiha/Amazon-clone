import React from "react";
import CurrencyFormat from 'react-currency-format';
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Subtotal(){
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    // const getBasketTotal = (basket) =>
    //     basket?.reduce((amount, item) => item.price + amount, 0);
    const getBasketTotal = (basket) => {
        const totalCost = basket?.reduce((amount, item) => item.price + amount, 0) || 0;
        return totalCost;
    };
    
    return (
    <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <div>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong> 
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" />
                        This order contains a gift 
                    </small>
                </div>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
            <button onClick={(e)=> history.push("/payment")}>
            Proceed to checkout.
            </button>
    </div>
    );
}

export default Subtotal;