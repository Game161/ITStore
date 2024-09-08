import React from "react";
import Layout from "../components/Layout";
import Slideshow from "../elements/slideshow";

const Contact = () => {
  return (
    <Layout>
      <Slideshow />
      <h1 className="font-bold lg:text-[64px] text-black mt-5 mx-10 md:text-[40px]">Contact</h1>
      <hr />
      <div className="mx-10">
      <h1 className="font-bold lg:text-[64px] text-black mt-5 md:text-[40px]">PPGP IT</h1>
      <p className="lg:text-[40px] md:text-[24px]"><span className="font-bold">Address : </span>11/18 soi7 Nakhon Pathom 73000</p>
      <p className="lg:text-[40px] md:text-[24px]"><span className="font-bold">Tel : </span>096-9870945</p>
      <p className="lg:text-[40px] md:text-[24px]"><span className="font-bold">E-mail : </span>PPGPITShop@gmail.com</p>
      </div>
    </Layout>
  );
};

export default Contact;
