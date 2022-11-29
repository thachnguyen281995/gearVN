import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Logo from "../images/logoGearvn.png";
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div class="w-full max-w-md space-y-8">
                    <div>
                        <img class="mx-auto h-12 w-auto" src={Logo} alt="Your Company" />
                        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Đăng ký vào tài khoản của bạn
                        </h2>
                        <p class="mt-2 text-center text-sm text-gray-600">
                            <Link to="/" href="#" class="font-medium text-red-500 hover:text-red-600">
                                Mua hàng online với nhiều ưu đãi hơn tại GEARVN
                            </Link>
                        </p>
                    </div>
                    <form class="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div class="">
                            <div className="mb-2">
                               
                                <input
                                    class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none "
                                    type="text"
                                    placeholder="Họ và tên"
                                />
                                
                            </div>
                            <div className="mb-2">
                               
                               <input
                                   class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none "
                                   type="email"
                                   placeholder="Email"
                               />
                               
                           </div>
                           <div className="mb-2">
                               
                               <input
                                   class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none "
                                   type="password   "
                                   placeholder="Password"
                               />
                               
                           </div>
                       
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                                    Ghi nhớ mật khẩu
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                class="group relative flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            >
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        class="h-5 w-5 text-red-500  group-hover:text-red-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span>
                                Đăng Ký
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
