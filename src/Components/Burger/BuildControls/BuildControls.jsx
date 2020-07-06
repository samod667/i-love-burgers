import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

export default function BuildControls(props) {
  return (
    <div className={classes.BuildControls}>
      <p>
        Price: <strong>${props.price.toFixed(2)}</strong>
      </p>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            removed={() => props.ingredientRemoved(control.type)}
            added={() => props.ingredientAdded(control.type)}
            disabled={props.disabled[control.type]}
          />
        );
      })}
    </div>
  );
}
