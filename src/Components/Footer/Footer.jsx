import React from "react";
import Classes from "./footer.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className={Classes.Footer}>
      <div className={Classes.Back}>Back to top</div>
      <div className={Classes.Footer__container}>
        <div className={Classes.footer__details}>
          <h3>Get to Know US</h3>
          <ul>
            <li>
              <Link to={"#"}>careers</Link>
            </li>
            <li>
              <Link to={"#"}>Blog</Link>
            </li>
            <li>
              <Link to={"#"}>About Amazon</Link>
            </li>
            <li>
              <Link to={"#"}>lnvestor Relations</Link>
            </li>
            <li>
              <Link to={"#"}>Amazon Devices</Link>
            </li>
            <li>
              <Link to={"#"}>Amazon Science</Link>
            </li>
          </ul>
        </div>
        <div className={Classes.footer__details}>
          <h3>Make Money With Us</h3>
          <ul>
            <li>
              <Link to={"#"}>Sell products on Amazon</Link>
            </li>
            <li>
              <Link to={"#"}>Sell apps on Amazon</Link>
            </li>
            <li>
              <Link to={"#"}>Sell apps on Amazon</Link>
            </li>
            <li>
              <Link to={"#"}>Become an Affiliate</Link>
            </li>
            <li>
              <Link to={"#"}>Advertise Your Products</Link>
            </li>
            <li>
              <Link to={"#"}>Self-Publish with Us</Link>
            </li>
            <li>
              <Link to={"#"}>Host an Amazon Hub</Link>
            </li>
            <li>
              <Link to={"#"}>›See More Make Money with Us</Link>
            </li>
          </ul>
        </div>
        <div className={Classes.footer__details}>
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>
              <Link to={"#"}>Amazon Business Card</Link>
            </li>

            <li>
              <Link to={"#"}>Shop with points</Link>
            </li>

            <li>
              <Link to={"#"}>Reload You Balance</Link>
            </li>
            <li>
              <Link to={"#"}>Amazon Currency Converter</Link>
            </li>
          </ul>
        </div>
        <div className={Classes.footer__details}>
          <h3>Let Us Help You</h3>
          <ul>
            <li>
              <Link to={"#"}>Amazon and COVlD-19</Link>
            </li>
            <li>
              <Link to={"#"}>Your Account</Link>
            </li>
            <li>
              <Link to={"#"}>AYour Orders</Link>
            </li>
            <li>
              <Link to={"#"}>Shipping Rates & Policies</Link>
            </li>
            <li>
              <Link to={"#"}>Amazon Prime</Link>
            </li>
            <li>
              <Link to={"#"}>Returns & Replacements</Link>
            </li>
            <li>
              <Link to={"#"}>Manage Your Content and Devices</Link>
            </li>
            <li>
              <Link to={"#"}>Amazon Assistant</Link>
            </li>
            <li>
              <Link to={"#"}>Help</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={Classes.footer__container_logo}>
        <div className={Classes.logo}>
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </div>
        <div className={Classes.footer__div}>English</div>
        <div className={Classes.footer__div}>$USD - U.S Dollar</div>
        <div className={Classes.footer__div}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
            alt=""
          />
          United Stares
        </div>
      </div>
      <h1>Built By: Yohanis Bedada</h1>
    </div>
  );
}

export default Footer;
