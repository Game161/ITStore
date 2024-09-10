import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="w-full h-screen flex justify-between items-center mx-[200px]">
        <div className="w-[564px]">
        <h1 className="font-semibold text-[40px]">เกี่ยวกับเรา</h1>
        <h1 className="text-[80px] font-bold">About us</h1>
        <p className="text-[24px]">
          PPGP IT เป็นเว็บจำหน่ายอุปกรณ์ IT
          ราคาถูกรับประกันคุณภาพอุปกรณ์ทุกชิ้นส่งตรงจากโรงงานจำหน่ายทั้ง
          อุปกรณ์คอมพิวเตอร์ หูฟัง ลำโพง เมาส์
          และอื่นๆอีกมากมายหากลูกค้าท่านไหนสนใจของคุณภาพราคามิตรต้องมาที่นี้เลย
        </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
