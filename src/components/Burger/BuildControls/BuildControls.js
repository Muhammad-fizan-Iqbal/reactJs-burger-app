import React from "react";
import { withRouter } from "react-router-dom";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Mushroom", type: "mushroom" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price : <strong>{props.price.toFixed(2)} $</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientsAdded(ctrl.type)}
        removed={() => props.ingredientsRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.ordered}
    >
      <strong>{props.isAuth ? "ORDER NOW" : "SINGUP TO ORDER"}</strong>
    </button>
  </div>
);
export default withRouter(buildControls);
