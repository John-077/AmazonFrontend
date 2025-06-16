import React, { useContext } from "react";
import { Link } from "react-router";
import { SlLocationPin } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import {auth} from "../../Utility/firebase";
function Header() {
  const [{user, basket }, dispatch] = useContext(DataContext);
  // console.log(basket.length);
  const total = basket?.reduce((amount, item) => {
    return item.amount + amount
  }, 0);
  return (
    <section className={classes.fixed}>
      <div className={classes.header__container}>
        {/* logo section*/}
        <div className={classes.logo__container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>

          {/* delivery section */}
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <h3>Ethiopia</h3>
            </div>
          </div>
        </div>

        {/* Search section */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All </option>
          </select>
          <input type="text" />
          <BiSearch size={38} />
        </div>
        {/* right section */}
        <div className={classes.order__container}>
          <Link to="#" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
              alt=""
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>

          {/* three components */}
          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>   
                <h5>Hello, {user?.email?.split("@")[0]}</h5>
                <span onClick={() => auth.signOut()}>Sign Out</span>
                </>
              ) : (
                <>  
                <p>Hello, Sign In</p>
                <span>Account & Lists</span>
                </>
              )}
             
            </div>
          </Link>

          {/* order section */}
          <Link to="/orders">
            <div>
              <p>Returns</p>
              <span>& Orders</span>
            </div>
          </Link>

          {/* cart section */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={33} />
            <span>{total}</span>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
}

export default Header;
