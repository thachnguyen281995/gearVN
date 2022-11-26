import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import {MdFavorite, MdHelp} from "react-icons/md";
import {FaWallet,FaUserFriends} from "react-icons/fa"
const Navbar = () => {
    const [nav,setNav] = useState(false); 
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Left side */}
            <div className="flex items-center">
                <div onClick={() =>setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                    Best <span className="font-bold">Eats</span>
                </h1> */}
                <img src="https://theme.hstatic.net/1000026716/1000440777/14/logo.svg?v=30245" alt="" className="h-10 mx-4 hidden lg:flex items-center"/>
                {/* <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div> */}
            </div>
            {/* Search Input */}
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={20} />
                <input className="bg-transparent p-2 w-full focus:outline-none" type="text" placeholder="Tên sản phẩm" />
            </div>
            {/* Cart Button */}
            <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full hover:bg-[#ea1c00] border-none duration-300">
                <BsFillCartFill size={20} className="mr-2" />
                Giỏ Hàng
            </button>
            {/* Mobile Menu */}
            {/* OverLay */}
           {nav?  <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ""}
            {/* Side drawer menu */}
            <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose 
                onClick={() =>setNav(!nav)}
                size={30} className="absolute right-4 top-4 cursor-pointer" />
                <h2 className="text-2xl p-4">
                    Danh mục sản phẩm
                </h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-xl py-4 flex items-center gap-2 cursor-pointer hover:text-[#ea1c00]">
                            {/* <TbTruckDelivery size={25} className="mr-4" /> */}
                            <img src="https://theme.hstatic.net/1000026716/1000440777/14/xxx21.png?v=30245" alt="" className="h-5"/>
                            Laptop Gaming
                        </li>
                        <li className="text-xl py-4 flex items-center gap-2 cursor-pointer hover:text-[#ea1c00]">
                            {/* <MdFavorite size={25} className="mr-4" /> */}
                            <img src="https://theme.hstatic.net/1000026716/1000440777/14/xxx28.png?v=30245" alt="" className="h-5"/>
                            Apple
                        </li>
                        <li className="text-xl py-4 flex items-center gap-2 cursor-pointer hover:text-[#ea1c00]">
                            {/* <FaWallet size={25} className="mr-4" /> */}
                            <img src="https://theme.hstatic.net/1000026716/1000440777/14/xxx210.png?v=30245" alt="" className="h-5"/>
                            Bàn phím
                        </li>
                        <li className="text-xl py-4 flex items-center gap-2 cursor-pointer hover:text-[#ea1c00]">
                            {/* <MdHelp size={25} className="mr-4" /> */}
                            <img src="https://theme.hstatic.net/1000026716/1000440777/14/xxx212.png?v=30245" alt="" className="h-5"/>
                            Tai nghe - Loa
                        </li>
                        <li className="text-xl py-4 flex items-center gap-2 cursor-pointer hover:text-[#ea1c00]">
                            {/* <AiFillTag size={25} className="mr-4" /> */}
                            <img src="https://theme.hstatic.net/1000026716/1000440777/14/xxx113.png?v=30245" alt="" className="h-5"/>
                            Ghế - Bàn
                        </li>
                        <li className="text-xl py-4 flex items-center gap-2 cursor-pointer hover:text-[#ea1c00]">
                            {/* <BsFillSaveFill size={25} className="mr-4" /> */}
                            <img src="https://theme.hstatic.net/1000026716/1000440777/14/xxx114.png?v=30245" alt="" className="h-5"/>
                            Thiết bị văn phòng
                        </li>
                        <li className="text-xl py-4 flex items-center gap-2 cursor-pointer hover:text-[#ea1c00]">
                            {/* <FaUserFriends size={25} className="mr-4" /> */}
                            <img src="https://theme.hstatic.net/1000026716/1000440777/14/xxx216.png?v=30245" alt="" className="h-5"/>
                            Phụ kiện
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;