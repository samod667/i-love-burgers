import React from "react";

import Button from '../../UI/Button/Button'
import Aux from "../../../hoc/Aux";

export default function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTrasform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your burger ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout</p>
      <Button btnType="Danger" click={props.purchaseCancel}>
        Cancel
      </Button>
      <Button btnType="Success" click={props.purchaseContinue}>
        Continue
      </Button>
    </Aux>
  );
}
