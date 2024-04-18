import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const [{basket}, dispatch] = useStateValue(); //local storage form of UseState hook
  console.log("this is the basket: " , basket);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        key: props.id,
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };
 
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating) //create a star for each rating amt
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={props.image} alt="" />

      <button onClick={addToBasket} >Add to Basket</button>
    </div>
  );
}

export default Product;