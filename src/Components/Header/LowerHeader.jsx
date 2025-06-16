import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css";
function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Today's Service</li>
        <li>Constumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
        {/* <li className={classes.shop}> Shop the Gaming Store</li> */}
      </ul>
    </div>
  );
}

export default LowerHeader;
