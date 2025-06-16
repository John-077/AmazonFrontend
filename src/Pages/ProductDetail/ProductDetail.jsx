import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import LayOut from "../../Components/LayOut/LayOut";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
function ProductDetail() {
  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  // console.log(product);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product details:", err);
        setLoading(false);
      });
  }, []);

  return (
    <LayOut>{loading ? <Loader /> : <ProductCard product={product}
      renderAdd={true} 
     flex={true}
     renderDesc={true}/>}</LayOut>
  );
}

export default ProductDetail;
