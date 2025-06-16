import React from "react";
import { categoryInfos } from "./CatagoryFulllnfos";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";
function Category() {
  return (
    <section className={classes.Category__container}>
      {categoryInfos.map((infos, index) => (
        <CategoryCard key={index} data={infos} />
      ))}
    </section>
  );
}

export default Category;
