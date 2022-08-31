import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existingCardItem = state.items.findIndex(
      (element) => element.id === action.value.id
    );

    const updatedItems = [...state.items];

    if (existingCardItem === -1) {
      updatedItems.push(action.value);
    } else {
      updatedItems[existingCardItem].amount += action.value.amount;
    }

    const updatedTotal =
      state.totalAmount + action.value.price * action.value.amount;

    return { items: updatedItems, totalAmount: updatedTotal };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedItems = [...state.items];
    let updatedTotal = state.totalAmount;

    const existingCardItem = state.items.findIndex(
      (element) => element.id === action.id
    );

    updatedTotal = updatedTotal - updatedItems[existingCardItem].price;
    if (updatedItems[existingCardItem].amount === 1) {
      updatedItems = state.items.filter((element) => element.id !== action.id);
    } else {
      updatedItems[existingCardItem].amount -= 1;
    }

    return { items: updatedItems, totalAmount: updatedTotal };
  }

  if (action.type === "CLEAR_CART") {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", value: item });
  };
  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  const clearCart = () => {
    dispatchCartAction({ type: "CLEAR_CART" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
    clearCart: clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
