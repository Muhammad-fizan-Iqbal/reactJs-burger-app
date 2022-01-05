import React, { Component } from "react";
import Auux from "../../../hoc/Auux/Auux";
import Button from "../../../components/UI/Button/Button";
class OrderSummary extends Component {
  //This could be a functional Component,doesn't have to be a class

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igkey) => {
        return (
          <li key={igkey}>
            <span style={{ textTransform: "capitalize" }}>{igkey}</span>:{" "}
            {this.props.ingredients[igkey]}
          </li>
        );
      }
    );
    return (
      <Auux>
        <h3>Your Order</h3>
        <p>A great delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price : {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Auux>
    );
  }
}

export default OrderSummary;
