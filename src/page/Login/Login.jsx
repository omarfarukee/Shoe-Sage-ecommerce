/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import useLoader from '../../shared/loader/Loader';
import FinalLoader from '../../shared/loader/FinalLoader';
import shoe from "../../assets/backgrounds/shoe3.jpeg";
import { FaEye, FaEyeSlash, FaFacebook, FaLock, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import logo from "../../assets/logo/logo.png";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { loading, online } = useLoader();

    if (loading || !online) {
        return <FinalLoader />;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle login logic here, e.g., send data to server
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div
            className="overflow-hidden h-screen w-screen flex justify-center items-center" // Ensures the div spans the entire viewport
            style={{
                backgroundImage: `url(${shoe})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className='w-[70vw] flex h-[80vh] border shadow-xl border-[#0000002a]  rounded-lg mt-8 items-center bg-transparent backdrop-blur-sm'>
                
                <div className='w-[50%] flex flex-col items-center justify-center text-center bg-[#ffffff15] h-full rounded-tl-lg rounded-bl-lg'>
                    <img className='ml-20 floating' src={logo} alt="" />
                    <div className='animate__animated animate__backInDown mt-5 text-[#9494a0] w-[400px]'>
                        <h1 className='text-titleSm'>Walk good</h1>
                        <p className='text-titleXXsm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolore quasi possimus ratione doloribus, minima error maiores sequi similique provident.</p>
                    </div>
                </div>

                <div className='flex justify-center w-[50%]'> 
                <form
                onSubmit={handleSubmit}
                className="animate__animated animate__backInUp  bg-transparent mx-3 lg:mx-0   p-6 rounded-lg  w-[400px] h-[400px] z-10 relative"
            >
                <div className="flex justify-center text-white">
                    <h2 className="text-titleMd font-semibold mb-4 uppercase">USER-Login</h2>
                </div>

                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-white">
                        Email/Phone Number
                    </label>
                    <div className="flex items-center border border-[#9494a0] rounded-md p-2">
                        <FaUser className="text-[#9494a0] mr-2" />
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-transparent outline-none text-white"
                            placeholder="Enter your username"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-white">
                        Password
                    </label>
                    <div className="flex items-center border border-[#9494a0] rounded-md p-2">
                        <FaLock className="text-[#9494a0] mr-2" />
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-transparent outline-none text-white"
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="focus:outline-none ml-2"
                        >
                            {showPassword ? (
                                <FaEyeSlash className="text-white" />
                            ) : (
                                <FaEye className="text-white" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe" className="ml-2 text-sm text-white">
                            Remember me
                        </label>
                    </div>
                    <a href="#" className="text-sm text-white hover:underline">
                        Forgot password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-full bg-red hover:bg-rose-500 transition-all duration-300 text-white font-bold py-2 px-4 rounded"
                >
                    Login
                </button>

                <div className='flex items-center gap-3 justify-center mt-5'>
                    <div className='w-[100px] h-[2px] bg-white'></div>
                    <p className='text-white'>OR</p>
                    <div className='w-[100px] h-[2px] bg-white'></div>
                </div>

                <div>
                    <div className='flex items-center gap-2 justify-center mt-3 cursor-pointer'>
                        <FcGoogle className='text-titleSm' /> <span className='text-titleXXsm text-white'>Sign up with google</span> 
                    </div>
                    <div className='flex items-center gap-2 justify-center mt-3 cursor-pointer'>
                        <FaFacebook className='text-titleSm text-[#0866ff]' /> <span className='text-titleXXsm text-white'>Sign up with Facebook</span> 
                    </div>
                </div>

                <div className="mt-4 text-center flex gap-2 justify-center">
                    <p className="text-white text-titleXXsm">Don&apos;t have an account?</p>
                    <NavLink to="/signUp">
                        <a href="#" className="text-green-300 hover:underline text-titleXXsm">
                            Sign-up
                        </a>
                    </NavLink>
                </div>
                </form> 
                </div>

            </div>
           
        </div>
    );
};

export default Login;
