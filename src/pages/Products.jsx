import React from "react";
import Layout from "../components/Layout";
import Card from "../elements/card";
const Products = () => {
  const productList = [
    {
      productid:"1",
      image: "20200824120814.jpg",
      name: "ROG Falchion Ace HFX",
    },
    {
      productid:"2",
      image: "Notebook.webp",
      name: "ROG Strix Scope II 96 RX Wireless",
    },
    {

      productid:"3",
      image: "Notebook.webp",
      name: "adfadsf",
    },
  ]
  return (
    <Layout>
      <div className="w-full bg-white flex justify-center items-center h-[130px] text-5xl font-bold">Keyboards</div>
      <div className="flex 2xl:mx-[100px] gap-3 mt-3 mx-[50px]">
      <div className="w-[20%] bg-white px-2 py-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
        <h2 className="text-[22px] font-semibold">Products</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </div>
        <div className="hidden">
        <div className="flex gap-2">
          <input type="checkbox" className=""/>
          <h4 className="text-[16px] font-medium">Keyboards</h4>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" className=""/>
          <h4 className="text-[16px] font-medium">Mouse</h4>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" className=""/>
          <h4 className="text-[16px] font-medium">Headsets</h4>
        </div>
        </div>
        <hr />
        <div className="flex justify-between items-center">
        <h2 className="text-[22px] font-semibold">BRAND</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </div>
        <div className="hidden">
        <div className="flex gap-2">
          <input type="checkbox" className=""/>
          <h4 className="text-[16px] font-medium">Logitech</h4>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" className=""/>
          <h4 className="text-[16px] font-medium">Asus</h4>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" className=""/>
          <h4 className="text-[16px] font-medium">Hyperx</h4>
        </div>
        </div>
        <hr />
        <div className="flex justify-between items-center">
        <h2 className="text-[22px] font-semibold">Color</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </div>
        <div className="hidden">
        <div className="flex gap-2">
          <div className="rounded-full bg-black border-[1px] border-[#878787] w-[20px] h-[20px]"></div>
          <div className="rounded-full bg-white border-[1px] border-[#878787] w-[20px] h-[20px]"></div>
        </div>
        </div>
        <hr />
        <div className="flex justify-between items-center">
        <h2 className="text-[22px] font-semibold">CONNECTIVITY</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </div>
        <div className="hidden">
        <div className="flex gap-2">
          <input type="checkbox" className=""/>
          <h4 className="text-[16px] font-medium">Bluetooth Wireless</h4>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" className=""/>
          <h4 className="text-[16px] font-medium">Wired</h4>
        </div>
        </div>
      </div>
      <div className="grid 2xl:grid-cols-3 w-[80%] grid-cols-1 lg:grid-cols-2">
      {productList.map((d) => (
        <Card key={d.name} {...d} />
      ))}
      </div>
      </div>
    </Layout>
  );
};

export default Products;
