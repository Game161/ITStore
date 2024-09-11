import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="w-full h-screen flex items-center justify-between gap-0">
        <div className="ml-[150px] w-[564px] m-0 p-0 ">
        <h1 className="font-semibold text-[40px]">เกี่ยวกับเรา</h1>
        <h1 className="text-[80px] font-bold">About us</h1>
        <p className="text-[24px]">
          PPGP IT เป็นเว็บจำหน่ายอุปกรณ์ IT
          ราคาถูกรับประกันคุณภาพอุปกรณ์ทุกชิ้นส่งตรงจากโรงงานจำหน่ายทั้ง
          อุปกรณ์คอมพิวเตอร์ หูฟัง ลำโพง เมาส์
          และอื่นๆอีกมากมายหากลูกค้าท่านไหนสนใจของคุณภาพราคามิตรต้องมาที่นี้เลย
        </p>
        </div>
        <img src="https://images-ext-1.discordapp.net/external/UnX4R8wAxTDuknb1Phzst8sFit6wc6LUGaIqaWh-xTU/https/png.pngtree.com/png-clipart/20221026/original/pngtree-business-man-working-with-laptop-png-image_8724600.png?format=webp&quality=lossless&width=702&height=702" alt="" className="w-[1050px] h-full"/>
      </div>
    </Layout>
  );
};

export default About;
