import React from 'react'

const ProductDetailBox = (props) => {
  return (
    <div className="w-[1469px] h-[537px] rounded-lg bg-white border-[1px] border-black flex justify-between">
      <img src={props.image} alt="" />
      <div className="flex flex-col w-[630px] my-10 gap-2">
        <h1 className="text-[64px] font-semibold">{props.type}</h1>
        <h3 className="text-red-500 text-2xl font-semibold">รายละเอียด</h3>
        <h2 className="text-[32px] font-semibold">{props.productname}</h2>
        <h2 className='text-[36px] font-medium'>ราคา {props.price} </h2>
        <h3 className='text-2xl'>จำนวน</h3>
        <button className='w-[245px] border-[1px] border-red-500 h-[41px] text-2xl font-semibold text-red-500 py-2'>สั่งซื้อทันที</button>
      </div>
    </div>
  )
}

export default ProductDetailBox