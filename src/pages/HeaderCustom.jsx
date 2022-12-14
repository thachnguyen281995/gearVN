import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../images/logoGearvn.png";
const HeaderCustom = () => {
  return (
    <div>
          <nav className="bg-white py-2 md:py-4">
                    <div className="container px-4 mx-auto md:flex md:items-center">
                        <div className="flex justify-center md:justify-between items-center">
                            <Link to="/" >
                                <img
                                    src="https://theme.hstatic.net/1000026716/1000440777/14/logo.svg?v=30245"
                                    alt=""
                                    className="h-16 mx-4 hidden lg:flex items-center"
                                />
                                <img src={Logo} alt="" className="lg:hidden h-12 " />
                            </Link>
                        </div>

                        <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                            <Link to="#" className="p-2 lg:px-4 md:mx-2 text-gray-600  font-bold hover:text-red-600">
                                Hệ Thống Showroom
                            </Link>
                            <Link
                                to="#"
                                className="p-2 lg:px-4 md:mx-2 text-gray-600 font-bold  rounded  hover:text-red-600 transition-colors duration-300"
                            >
                                Trả Góp
                            </Link>
                            <Link
                                to="#"
                                className="p-2 lg:px-4 md:mx-2 text-gray-600 font-bold  rounded  hover:text-red-600 transition-colors duration-300"
                            >
                                Bảo Hành
                            </Link>
                            <Link
                                to="#"
                                className="p-2 lg:px-4 md:mx-2 text-gray-600 font-bold  rounded  hover:text-red-600 transition-colors duration-300"
                            >
                                Liên Hệ
                            </Link>
                            <button className="bg-red-600 text-white hidden md:flex items-center py-2 rounded-full hover:bg-[#ea1c00] border-none duration-300">
                                ☎ Hotline: 1800 6975
                            </button>
                        </div>
                    </div>
                </nav>
    </div>
  )
}

export default HeaderCustom