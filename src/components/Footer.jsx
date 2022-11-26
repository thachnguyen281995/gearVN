import React from 'react'
import {AiFillFacebook} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
const Footer = () => {
  return (
    <div>
        <div className="footer-2 bg-gray-800 pt-6 md:pt-12">
  <div className="container px-4 mx-auto">

    <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">

      <div className="footer-info lg:w-1/3 md:px-4">
        <h4 className="text-white text-2xl mb-4">CÔNG TY TNHH THƯƠNG MẠI GEARVN.</h4>
        <p className="text-gray-400">EMAIL: <span className='text-white'>CSKH@GEARVN.COM</span></p>
        <p className="text-gray-400">HỆ THỐNG TỔNG ĐÀI MIỄN PHÍ: <span className='text-white'>(Làm việc từ 08h00 - 21h00)</span></p>
        <p className="text-gray-400">Gọi mua hàng<span className='ml-16 text-white'>1800 6975</span></p>
        <p className="text-gray-400">Hỗ trợ khách hàng <span className='ml-10 text-white'>1800 6975</span></p>
        <div className="mt-4">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500  py-2 px-4 text-white rounded mt-2 transition-colors duration-300 border-none">
            <span className="fab fa-facebook-f mr-2 flex gap-2 items-center"> <AiFillFacebook/>Facebook</span> 
          </button>
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
            <span className="fab fa-twitter mr-2 flex gap-2 items-center"><BsInstagram/>Instagram</span>
          </button>
        </div>
      </div>

      <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
        <div className="sm:flex">
          <div className="sm:flex-1">
            <h6 className="text-base font-medium text-white uppercase mb-2">HỆ THỐNG CỬA HÀNG</h6>
            <div className=''>
              <a href="#" className="text-gray-400 py-1 block">Địa chỉ 1: 78-80-82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình.</a>
              <a href="#" className="text-gray-400 py-1 block">Địa chỉ 2: 905 Kha Vạn Cân, Phường Linh Tây, Thành phố Thủ Đức</a>
              <a href="#" className="text-gray-400 py-1 block">Địa chỉ 3: 1081 - 1083 Trần Hưng Đạo, Phường 5, Quận 5</a>
              <a href="#" className="text-gray-400 py-1 block">Địa chỉ : 162 - 164 Thái Hà, Phường Trung Liệt, Quận Đống Đa, Hà Nội</a>
            </div>
          </div>
         
        </div>
      </div>

      <div className="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
        <h5 className="text-lg text-white font-medium mb-4">Chính sách bảo hành</h5>
        <h5 className="text-lg text-white font-medium mb-4">Chính sách thanh toán</h5>
        <h5 className="text-lg text-white font-medium mb-4">Chính sách giao hàng</h5>
        <h5 className="text-lg text-white font-medium mb-4">Chính sách bảo mật</h5>
        
        {/* <button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded py-2 px-6 md:px-12 transition-colors duration-300">Explore</button> */}
      </div>

    </div>

  </div>

  <div className="border-t border-solid border-gray-900 mt-4 py-4">
    <div className="container px-4 mx-auto">

      <div className="md:flex md:-mx-4 md:items-center">
        <div className="md:flex-1 md:px-4 text-center md:text-left">
 
        </div>
        <div className="md:flex-1 md:px-4 text-center md:text-right items-center flex">
          <a href="#" className="py-2 px-4 text-white inline-block hover:underline"><img className="h-12" src="https://theme.hstatic.net/1000026716/1000440777/14/20150827110756-dathongbao.png" alt="" /></a>
          <a href="#" className="py-2 px-4 text-white inline-block hover:underline"><img className="h-7" src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=65147526-7602-46be-9047-e8c33f9fcbd3" alt="" /></a>
        </div>
      </div>

    </div>
  </div>

</div>
    </div>
  )
}

export default Footer