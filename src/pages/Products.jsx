import Layout from "../components/Layout";
import Card from "../elements/card";
import React, { useState, useRef } from "react";

const Products = () => {
  const [isProductOpen, setProductOpen] = useState(false);
  const [isBrandOpen, setBrandOpen] = useState(false);
  const [isColorOpen, setColorOpen] = useState(false);
  const [isConnectivityOpen, setConnectivityOpen] = useState(false);

  const toggleSection = (section) => {
    switch (section) {
      case "product":
        setProductOpen(!isProductOpen);
        break;
      case "brand":
        setBrandOpen(!isBrandOpen);
        break;
      case "color":
        setColorOpen(!isColorOpen);
        break;
      case "connectivity":
        setConnectivityOpen(!isConnectivityOpen);
        break;
      default:
        break;
    }
  };
  const productList = [
    {
      productid: "1",
      image: "product1.png",
      name: "ROG Falchion Ace HFX",
    },
    {
      productid: "2",
      image: "product2.png",
      name: "ROG Strix Scope II 96 RX Wireless",
    },
    {
      productid: "3",
      image: "product3.png",
      name: "The ROG Azoth Extreme",
    },
    {
      productid: "4",
      image: "product4.png",
      name: "Logitech G515 LIGHTSPEED TKL",
    },
    {
      productid: "5",
      image: "product5.png",
      name: "LOGITECH G PRO X 60",
    },
    {
      productid: "6",
      image: "product6.png",
      name: "Aurora Collection, G715",
    },
    {
      productid: "7",
      image: "product7.png",
      name: "ROG Fusion II 500",
    },
    {
      productid: "8",
      image: "product8.png",
      name: "ROG Strix Impact III",
    },
    {
      productid: "9",
      image: "product9.png",
      name: "ROG Pelta",
    },
  ];
  return (
    <Layout>
      <div className="w-full bg-white flex justify-center items-center h-[130px] text-5xl font-bold">
        Products
      </div>
      <div className="flex 2xl:mx-[100px] lg:gap-3 mt-3 mx-[50px] gap-6">
        <div className="lg:w-[20%] bg-white px-2 py-4 flex flex-col gap-2 w-[40%]">
          <div className="flex justify-between items-center">
            <h2 className="text-[22px] font-semibold">Products</h2>
            <button onClick={() => toggleSection("product")}>
              {isProductOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              )}
            </button>
          </div>
          {isProductOpen && (
            <div>
              <div className="flex gap-2">
                <input type="checkbox" className="" />
                <h4 className="text-[16px] font-medium">Keyboards</h4>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className="" />
                  <h4 className="text-[16px] font-medium">Mouse</h4>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className="" />
                <h4 className="text-[16px] font-medium">Headsets</h4>
              </div>
            </div>
          )}
          <hr />
          <div className="flex justify-between items-center">
            <h2 className="text-[22px] font-semibold">BRAND</h2>
            <button onClick={() => toggleSection("brand")}>
              {isBrandOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              )}
            </button>
          </div>
          {isBrandOpen && (
            <div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <h4 className="text-[16px] font-medium">Logitech</h4>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <h4 className="text-[16px] font-medium">Asus</h4>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <h4 className="text-[16px] font-medium">Hyperx</h4>
              </div>
            </div>
          )}
          <hr />
          <div className="flex justify-between items-center">
            <h2 className="text-[22px] font-semibold">Color</h2>
            <button onClick={() => toggleSection("color")}>
              {isColorOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              )}
            </button>
          </div>
          {isColorOpen && (
            <div>
              <div className="flex gap-2">
                <div className="rounded-full bg-black border-[1px] border-[#878787] w-[20px] h-[20px]"></div>
                <div className="rounded-full bg-white border-[1px] border-[#878787] w-[20px] h-[20px]"></div>
              </div>
            </div>
          )}
          <hr />
          <div className="flex justify-between items-center">
            <h2 className="text-[22px] font-semibold">CONNECTIVITY</h2>
            <button onClick={() => toggleSection("connectivity")}>
              {isConnectivityOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              )}
            </button>
          </div>
          {isConnectivityOpen && (
            <div>
              <div className="flex gap-2">
                <input type="checkbox" className="" />
                <h4 className="text-[16px] font-medium">Bluetooth Wireless</h4>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className="" />
                <h4 className="text-[16px] font-medium">Wired</h4>
              </div>
            </div>
          )}
        </div>

        <div className="grid xl:grid-cols-3 lg:w-[80%] grid-cols-1 lg:grid-cols-2 w-[50%]">
          {productList.map((d) => (
            <Card key={d.name} {...d} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
