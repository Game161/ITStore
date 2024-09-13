import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import ProductDetailBox from "../elements/ProductDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const productDetails = [
    {
      productid: "1",
      image: "product1.png",
      type: "Keyboard",
      details: "ROG Falchion Ace HFX",
      price: "7,500"
    },
    {
      productid: "2",
      image: "product2.png",
      type: "Keyboard",
      details: "ROG Strix Scope II 96 RX Wireless",
      price: "7,500"
    },
    {
      productid: "3",
      image: "product3.png",
      type: "Keyboard",
      details: "The ROG Azoth Extreme",
      price: "7,500"
    },
    {
      productid: "4",
      image: "product4.png",
      type: "Keyboard",
      details: "Logitech G515 LIGHTSPEED TKL",
      price: "7,500"
    },
    {
      productid: "5",
      image: "product5.png",
      type: "Keyboard",
      details: "LOGITECH G PRO X 60",
      price: "7,500"
    },
    {
      productid: "6",
      image: "product6.png",
      type: "Keyboard",
      details: "Aurora Collection, G715",
      price: "7,500"
    },
    {
      productid: "7",
      image: "product7.png",
      type: "HeadPhone",
      details: "ROG Fusion II 500",
      price: "7,500"
    },
    {
      productid: "8",
      image: "product8.png",
      type: "Mouse",
      details: "ROG Strix Impact III",
      price: "7,500"
    },
    {
      productid: "9",
      image: "product9.png",
      type: "HeadPhone",
      details: "ROG Pelta",
      price: "7,500"
    },
  ];

  // Find the product that matches the ID
  const product = productDetails.find((p) => p.productid === id);

  return (
    <Layout>
      <div className="mx-[200px] mt-10" data-aos="fade-up" data-aos-duration="1500">
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
