import React from "react";
import numeral from 'numeral';
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Subtotal() {
    const history = useHistory();
    const [{ basket },] = useStateValue();
    // const getBasketTotal = (basket) =>
    //     basket?.reduce((amount, item) => item.price + amount, 0);
    const getBasketTotal = (basket) => {
        const totalCost = basket?.reduce((amount, item) => item.price + amount, 0) || 0;
        return totalCost;
    };

    return (
        <div className="subtotal">
            <div>
                <p>
                    Subtotal ({basket.length} items): <strong>{numeral(getBasketTotal(basket)).format('$0,0.00')}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" />
                    This order contains a gift
                </small>
            </div>
            <button onClick={(e) => history.push("/payment")}>
                Proceed to checkout.
            </button>
        </div>
    );
}

export default Subtotal;