import React, { useState } from "react";
import { data } from "../data/data.js";
import {MdComputer} from "react-icons/md"
import {ImKeyboard} from "react-icons/im"
import {RiComputerLine} from "react-icons/ri"
const Products = () => {
    const [product, setProduct] = useState(data);
    // Filter Type
    const filterType = (category) => {
        setProduct(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };
    return (
        <div className="max-w-[1640px] m-auto px-4 py-2 md:py-12">
            <h1 className="text-[#ea1c00] font-bold text-2xl text-center md:text-4xl">Danh Mục Các Sản Phẩm</h1>
            {/* Filter Row */}
            <div className="flex flex-col lg:flex-row justify-center mt-2">
                {/* Filter Type */}
                <div>
                    {/* <p className="font-bold text-gray-700">Lọc</p> */}
                    <div className="flex justify-between flex-wrap">
                        <button
                            onClick={() => setProduct(data)}
                            className="m-1 rounded-lg px-4 py-2 hover:bg-[#ea1c00] hover:text-white text-black font-normal  duration-300 border-none border shadow-lg"
                        >
                            All
                        </button>
                        <button
                            onClick={() => filterType('PC gearvn')}
                            className="m-1 rounded-lg px-4 py-2  text-black font-normal hover:bg-[#ea1c00] hover:text-white  duration-300 border-none flex items-center gap-2 border shadow-lg "
                        >
                            <MdComputer/>PC gearvn
                        </button>
                        <button
                            onClick={() => filterType('Bàn Phím')}
                            className="m-1 rounded-lg px-4 py-2  text-black font-normal hover:bg-[#ea1c00] hover:text-white duration-300 border-none flex items-center gap-2 border shadow-lg"
                        >
                            <ImKeyboard/>Bàn Phím
                        </button>
                        <button
                            onClick={() => filterType('Màn Hình')}
                            className="m-1 rounded-lg px-4 py-2  text-black font-normal hover:bg-[#ea1c00] hover:text-white duration-300 border-none flex items-center gap-2 border shadow-lg"
                        >
                            <RiComputerLine/>Màn hình
                        </button>
                    </div>
                </div>
                {/* Fiter Price */}
            </div>
            {/* Display Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {product.map((item, index) => {
                    return (
                        <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                            <img
                                src={item.image}
                                alt="{item.name}
                        "
                                className="w-full h-[300px] md:h-[380px] object-contain rounded-t-lg cursor-pointer"
                            />
                            <div className="p-2">
                                <p className="font-bold">{item.name}</p>
                                <p>
                                    <span className="font-medium">{item.price} ₫</span>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
