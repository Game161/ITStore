import React from "react";
import Layout from "../components/Layout";
import Card from "../elements/card";

const Products = () => {
  const productList = [
    {
      productid:"1",
      image: "20200824120814.jpg",
      name: "ROG Falchion Ace HFX",
      details: "Rog strix geforce rtxtm 4080 16gb gddr6x white oc edition",
    },
    {
      image: "Notebook.webp",
      name: "adfadsf",
      details: "loreadsfadfjafjkldjakljf",
    },
  ]
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-black">Products</h1>
      <hr />
      <div className="grid grid-cols-4 m-10">
      {productList.map((d) => (
        <Card key={d.name} {...d} />
      ))}
      </div>
    </Layout>
  );
};

export default Products;
