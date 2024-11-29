/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import useLoader from '../../shared/loader/Loader';
import FinalLoader from '../../shared/loader/FinalLoader';
import shoe from "../../assets/backgrounds/shoe3.jpeg";
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

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
            <form
                onSubmit={handleSubmit}
                className="animate__animated animate__backInUp bg-transparent backdrop-blur-md  p-6 rounded-lg shadow-2xl w-[400px] h-[400px] z-10 relative border border-[#180c003b]"
            >
                <div className="flex justify-center text-white">
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                </div>

                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-white">
                        Username
                    </label>
                    <div className="flex items-center border border-white rounded-md p-2">
                        <FaUser className="text-white mr-2" />
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
                    <div className="flex items-center border border-gray-300 rounded-md p-2">
                        <FaLock className="text-white mr-2" />
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

                <div className="mt-4 text-center">
                    <p className="text-white">Don&apos;t have an account?</p>
                    <NavLink to="/signUp">
                        <a href="#" className="text-white hover:underline">
                            Sign-up
                        </a>
                    </NavLink>
                </div>
            </form>
        </div>
    );
};

export default Login;
