import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default Button;
