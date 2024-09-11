import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import ProductDetailBox from "../elements/ProductDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const productDetails = [
    {
      productid: "1",
      type: "dsafafa",
      productname: "Rog Karee",
    },
    {
      productid: "2",
      type: "sdfsdfsdfs",
      productname: "Rog sdfsdfsdfsdf",
    },
  ];

  // Find the product that matches the ID
  const product = productDetails.find((p) => p.productid === id);

  return (
    <Layout>
      <div className="mx-[200px] gap-3">
        <h1 className="text-4xl font-medium">
          รายละเอียดสินค้า
        </h1>
        {product ? (
          <ProductDetailBox key={product.id} {...product} />
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetails;
