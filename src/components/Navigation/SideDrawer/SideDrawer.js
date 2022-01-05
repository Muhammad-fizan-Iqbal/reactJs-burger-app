import React from "react";
import Logo from "../../Logo/Logo";
import classes from "./SideDrawer.module.css";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";
import Auux from "../../../hoc/Auux/Auux";
import BackDrop from "../../UI/BackDrop/BackDrop";

const sidedrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Auux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Auux>
  );
};
export default sidedrawer;
