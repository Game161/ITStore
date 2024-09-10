import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import ProductDetailBox from "../elements/ProductDetails";
const ProductDetails = () => {
  const params = useParams();
  const productDetails = [
    {
      type:"dsafafa",
      productname:"Rog Karee",
    }
  ]
  return(
  <Layout>
    <div className="mx-[200px] gap-3">
    Details ID: {params.id}
    <h1 className="text-4xl font-medium">
      รายละเอียดสินค้า
    </h1>
    {productDetails.map((s) =>(
      <ProductDetailBox key={s.name} {...s}/>
    ))}
    </div>
  </Layout>
  );
};

export default ProductDetails;
