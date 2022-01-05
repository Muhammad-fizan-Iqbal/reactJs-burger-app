import React, { Component } from "react";
import classes from "./Modal.module.css";
import Auux from "../../../hoc/Auux/Auux";
import BackDrop from "../../UI/BackDrop/BackDrop";
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Auux>
        <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Auux>
    );
  }
}
export default Modal;
