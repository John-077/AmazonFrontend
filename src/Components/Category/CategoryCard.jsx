import React from "react";
import { Link } from "react-router";
import classes from "./Category.module.css";
function CategoryCard({ data }) {
  // const { name, title, imgLink } = data;
  // console.log(data);
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
