import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./Button.module.css";
import CartContext from "../../store/cart-context";

const Button = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default Button;
