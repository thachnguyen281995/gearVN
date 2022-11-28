import React from 'react'
import Quality from "../images/quality.png"
import Pay from "../images/pay.png"
import Delivery from "../images/delivery.png"
import Card from "../images/card.png"
const Banner = () => {
  return (
    <div className='max-w-[1640px] mx-auto flex md:justify-end px-4 pt-2 gap-2 max-[600px]:hidden font-abc'>
    <img src="./src/images/quality.png" alt="" />
        <button href="#" className="rounded-lg px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300 flex items-center gap-2">
        <img src={Card} alt="" className='h-8'/>HƯỚNG DẪN THANH TOÁN
        </button>
        <button href="#" className="rounded-lg px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300 flex items-center gap-2">
        <img src={Pay} alt="" className='h-8'/>HƯỚNG DẪN TRẢ GÓP</button>
        <button href="#" className="rounded-lg px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300 flex items-center gap-2">
        <img src={Quality} alt="" className='h-8'/>CHÍNH SÁCH BẢO HÀNH</button>
        <button href="#" className="rounded-lg px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300 flex items-center gap-2">
        <img src={Delivery} alt="" className='h-8'/>CHÍNH SÁCH VẬN CHUYỂN</button>
    </div>
  )
}

export default Banner