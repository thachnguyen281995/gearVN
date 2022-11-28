import React, { useState } from "react";
import { data } from "../data/data.js";
import { MdComputer } from "react-icons/md";
import { ImKeyboard } from "react-icons/im";
import { RiComputerLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Products = () => {
    // const [product, setProduct] = useState(data);
    // Filter Type
    // const filterType = (category) => {
    //     setProduct(
    //         data.filter((item) => {
    //             return item.category === category;
    //         })
    //     );
    // };
    const products = data.map(product => {
        return (
          <div key={product.id}>
            <h3>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </h3>
            <p>Price: ${product.price}</p>
            <hr />
          </div>
        );
      });
    return (
        // <div className="max-w-[1640px] m-auto px-4 py-2 md:py-12">
        //     <h1 className="text-[#ea1c00] font-bold text-2xl text-center md:text-4xl font-roboto">
        //         Danh Mục Các Sản Phẩm
        //     </h1>
        //     {/* Filter Row */}
        //     <div className="flex flex-col lg:flex-row justify-center mt-2">
        //         {/* Filter Type */}
        //         <div>
        //             {/* <p className="font-bold text-gray-700">Lọc</p> */}
        //             <div className="flex justify-between flex-wrap">
        //                 <button
        //                     onClick={() => setProduct(data)}
        //                     className="m-1 rounded-lg px-4 py-2 hover:bg-[#ea1c00] hover:text-white text-black font-normal  duration-300 border-none border shadow-lg"
        //                 >
        //                     All
        //                 </button>
        //                 <button
        //                     onClick={() => filterType("PC gearvn")}
        //                     className="m-1 rounded-lg px-4 py-2  text-black font-normal hover:bg-[#ea1c00] hover:text-white  duration-300 border-none flex items-center gap-2 border shadow-lg "
        //                 >
        //                     <MdComputer />
        //                     PC gearvn
        //                 </button>
        //                 <button
        //                     onClick={() => filterType("Bàn Phím")}
        //                     className="m-1 rounded-lg px-4 py-2  text-black font-normal hover:bg-[#ea1c00] hover:text-white duration-300 border-none flex items-center gap-2 border shadow-lg"
        //                 >
        //                     <ImKeyboard />
        //                     Bàn Phím
        //                 </button>
        //                 <button
        //                     onClick={() => filterType("Màn Hình")}
        //                     className="m-1 rounded-lg px-4 py-2  text-black font-normal hover:bg-[#ea1c00] hover:text-white duration-300 border-none flex items-center gap-2 border shadow-lg"
        //                 >
        //                     <RiComputerLine />
        //                     Màn hình
        //                 </button>
        //             </div>
        //         </div>
        //         {/* Fiter Price */}
        //     </div>
        //     {/* Display Image */}
        //     <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-5 gap-y-4 pt-4">
        //         {product.map((item, index) => {
        //             return (
        //                <>
        //                 <Link to={`detail/${item.id}`} >
        //                 <div key={index} className="w-72 bg-white shadow-md rounded-xl duration-300 hover:scale-105 hover:shadow-xl">
        //                     <img
        //                         src={item.image}
        //                         alt="{item.name}
        //                 "
        //                         className="w-full h-[300px] md:h-[300px] object-contain rounded-t-lg cursor-pointer"
        //                     />
        //                    <div className="px-4 py-3 w-72">
        //                 <span className="text-gray-400 mr-3 uppercase text-xs">{item.category}</span>
        //                 <p className="text-lg font-bold text-black truncate block capitalize">{item.name}</p>
        //                 <div className="flex items-center">
        //                     <p className="text-lg font-semibold text-black cursor-auto my-3">{item.price}</p>
        //                     {/* <del>
        //                         <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
        //                     </del> */}
        //                     <div className="ml-auto">
        //                         <svg
        //                             xmlns="http://www.w3.org/2000/svg"
        //                             width="20"
        //                             height="20"
        //                             fill="currentColor"
        //                             className="bi bi-bag-plus"
        //                             viewBox="0 0 16 16"
        //                         >
        //                             <path
        //                                 fillRule="evenodd"
        //                                 d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
        //                             />
        //                             <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        //                         </svg>
        //                     </div>
        //                 </div>
        //             </div>
        //                 </div>
        //                 </Link>
        //                </>
        //             );
        //         })}
        //     </div>
            
        // </div>
        <>
            <h1>Products Page</h1>
      {products}
        </>
    );
};

export default Products;
