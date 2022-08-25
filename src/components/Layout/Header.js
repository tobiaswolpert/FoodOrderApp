import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import Button from "./Button";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Food Order</h1>
        <Button onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
