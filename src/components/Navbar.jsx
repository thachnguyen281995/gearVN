import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill,BsFillBellFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import {MdFavorite, MdHelp} from "react-icons/md";
import {FaWallet,FaUserFriends} from "react-icons/fa"
import { Link } from "react-router-dom";
import {CgNotes} from "react-icons/cg"
import {FaUserAlt,FaSearch} from "react-icons/fa"
import Logo from "../images/logoGearvn.png"
import SideBar from "./SideBar";
const Navbar = () => {
    const [nav,setNav] = useState(false); 
    return (
        <div className="bg-[#f1f0f1] border-b-2 border-[#d4d4d4]">
            <img src="https://theme.hstatic.net/1000026716/1000440777/14/bn-top3.jpg?v=30250" alt="" className="max-[600px]:hidden w-full h-12 object-contain bg-black"/>
            <div className="hidden max-[600px]:flex py-1 bg-[#e0e0e0]"><h2 className="mx-auto flex items-center font-medium font-roboto"> <BsFillBellFill className="text-red-500 mr-2"/>
			PC GVN Khuyến Mãi Giá Chỉ Từ 5.000.000Đ
		</h2></div>
            <div className="max-w-[1640px] mx-auto flex justify-between items-center py-2">
                {/* Left side */}
                <div className="flex items-center">
                    <div onClick={() =>setNav(!nav)} className="cursor-pointer">
                        <AiOutlineMenu size={30} />
                    </div>
                    {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                        Best <span className="font-bold">Eats</span>
                    </h1> */}
                    <Link to="/" href="#"><img src="https://theme.hstatic.net/1000026716/1000440777/14/logo.svg?v=30245" alt="" className="h-16 mx-4 hidden lg:flex items-center"/>
                    <img src={Logo} alt="" className="sm:hidden h-6 ml-4"/>
                    </Link>
                    {/* <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                        <p className="bg-black text-white rounded-full p-2">Delivery</p>
                        <p className="p-2">Pickup</p>
                    </div> */}
                </div>
                {/* Search Input */}
                <div className="bg-white rounded-full flex items-center px-2 w-[250px] sm:w-[400px] lg:w-[500px]">
                    <AiOutlineSearch size={25} className=""/>
                    <input className="bg-transparent p-2 w-full focus:outline-none text-sm" type="text" placeholder="Nhập mã hoặc tên sản phẩm..." />
                    
                </div>
                {/* Cart Button Login Sale Register*/}
                
              <div className="flex gap-2">
              <Link to="/sign-up" className="text-black hidden md:flex items-center py-2 cursor-pointer">
                    <CgNotes size={20} className="mr-2" />
                    Đăng ký
                </Link>
                <Link to="sign-in" className="text-black hidden md:flex items-center py-2 cursor-pointer">
                    <FaUserAlt size={20} className="mr-2" />
                    Đăng nhập
                </Link>
                <a className="text-black hidden md:flex items-center py-2 cursor-pointer">
                    <img src="https://theme.hstatic.net/1000026716/1000440777/14/ak4.png?v=30250" alt="" className="h-7 mr-2"/>
                    Khuyến mãi
                </a>
                <button className="bg-red-600 text-white hidden md:flex items-center py-2 rounded-full hover:bg-[#ea1c00] border-none duration-300">
                    <BsFillCartFill size={20} className="mr-2" />
                    Giỏ Hàng
                </button>
              </div>
                {/* Mobile Menu */}
                {/* OverLay */}
               {nav?  <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ""}
                {/* Side drawer menu */}
                <div className={nav ? "fixed top-0 left-0 w-[260px] h-screen bg-white z-10 duration-500" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500"}>
                    <AiOutlineClose 
                    onClick={() =>setNav(!nav)}
                    size={20} className="absolute right-4 top-4 cursor-pointer" />
                    <h2 className="text-lg p-4">
                        Danh mục sản phẩm
                    </h2>
                    <SideBar/>
                </div>
            </div>
            
        </div>
        
    );
};

export default Navbar;
