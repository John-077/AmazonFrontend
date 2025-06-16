import React, { useContext } from "react";
import { Link } from "react-router";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
function ProductCard({ product, renderDesc, flex, renderAdd }) {
  const { image, rating, price, title, id, description } = product;
  const [state, dispatch] = useContext(DataContext);
  // console.log(state);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id,
        image,
        rating,
        price,
        title,
        description,
      },
    });
  };

  return (
    <div key={id}
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`} className={classes.link}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>
      <div>
        <h3 className={classes.title}>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* {rating} */}
          <Rating value={rating?.rate} precision={0.1} />
          {/*  count */}
          <small>{rating?.count}</small>
        </div>
        <div className={classes.price}>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>

        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
