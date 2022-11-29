import React  from "react";
import { data } from "../data/data.js";

import { Link } from "react-router-dom";
import BannerPc from "../images/computer.png"

const Products = () => {
    const products = data.map((product) => {
        
        return (
            
            <div key={product.id}>
                <Link to={`/products/${product.id}`}>
                    <div className="w-72 bg-white shadow-md rounded-xl duration-300 hover:scale-105 hover:shadow-xl">
                        <img
                            src={product.image}
                            alt="{item.name}
                        "
                            className="w-full h-[300px] md:h-[300px] object-contain rounded-t-lg cursor-pointer"
                        />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">{product.category}</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">{product.price} đ</p>
                                {/* <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del> */}
                                <div className="ml-auto">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        className="bi bi-bag-plus"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                                        />
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
    return (
        <>
            <div className="max-w-[1640px] m-auto px-4 py-2 md:py-12 mb-5 grid place-items-center">
            <span className='md:hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-2 px-4 text-white font-bold rounded ml-2 mt-2 transition-colors duration-300 text-3xl '>PC Gaming </span>
            <div className="hidden md:flex md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex-col justify-center relative rounded">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">Pc Gaming</h1>
        <p className="text-base lg:text-xl text-white dark:text-white">Best Seller <span className="font-bold"></span></p>
      </div>
      <div className="flex justify-end md:absolute md:bottom-4 md:right-4  lg:right-0 hover:scale-125 cursor-pointer duration-300">
        <img src={BannerPc} alt="" className="md:w-20 md:h-20 lg:w-full lg:h-full" />
      </div>
    </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pt-10">{products}</div>
            </div>
        </>
    );
};

export default Products;
