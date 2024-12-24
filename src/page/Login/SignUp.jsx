/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import useLoader from '../../shared/loader/Loader';
import FinalLoader from '../../shared/loader/FinalLoader';
import shoe from '../../assets/backgrounds/shoe4.jpg';
import { FaEye, FaEyeSlash, FaFacebook, FaLock, FaPhone, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import logo from "../../assets/logo/logo.png";
import { FcGoogle } from 'react-icons/fc';
import { SiGmail } from 'react-icons/si';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { loading, online } = useLoader();
  const navigate = useNavigate();

  if (loading || !online) {
    return <FinalLoader />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create user object
    const user = { name, email, number, password };

    // Save user info to session storage
    sessionStorage.setItem('user', JSON.stringify(user));

    // Log user data to verify
    console.log('User data saved to session storage:', user);
    toast.success(`${user.name} your account created successfully`)
    // Redirect to home page
    navigate('/');
  };

  return (
    <div
      className="overflow-hidden h-screen w-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${shoe})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className='w-[70vw] flex h-[80vh] border shadow-xl border-[#0000002a]  rounded-lg mt-20 items-center bg-transparent backdrop-blur-sm'>

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
            className="mt-2 animate__animated animate__backInUp mx-3 lg:mx-0 p-6 rounded-lg l w-[400px]  z-10 relative"
          >
            <div className="flex justify-center text-white">
              <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>
            </div>

            {/* Name Input */}
            <div className="mb-2">
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name
              </label>
              <div className="flex items-center border border-[#9494a0] rounded-md p-2">
                <FaUser className="text-[#9494a0] mr-2" />
                <input
                  required
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent outline-none text-white"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            {/* Username Input */}
            <div className="mb-2">
              <label htmlFor="username" className="block text-sm font-medium text-white">
                Email
              </label>
              <div className="flex items-center border border-[#9494a0] rounded-md p-2">
                <SiGmail className="text-[#9494a0] mr-2" />
                <input
                  required
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent outline-none text-white"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            {/* Number Input */}
            <div className="mb-2">
              <label htmlFor="number" className="block text-sm font-medium text-white">
                Phone Number
              </label>
              <div className="flex items-center border border-[#9494a0] rounded-md p-2">
                <FaPhone className="text-[#9494a0] mr-2" />
                <input
                  required
                  type="number"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-full bg-transparent outline-none text-white"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <FaLock className="text-[#9494a0] mr-2" />
                <input
                  type={showPassword ? 'text' : 'password'}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red hover:bg-rose-500 transition-all duration-300 text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </button>

            <div className='flex items-center gap-3 justify-center mt-0'>
              <div className='w-[100px] h-[2px] bg-white'></div>
              <p className='text-white'>OR</p>
              <div className='w-[100px] h-[2px] bg-white'></div>
            </div>

            <div className='flex items-center justify-evenly'>
              <div className='flex items-center gap-2 justify-center  cursor-pointer '>
                <FcGoogle className='text-titleSm' /> <span className='text-[10px] text-white'>Sign up with google</span>
              </div>
              <div className='flex items-center gap-2 justify-center  cursor-pointer'>
                <FaFacebook className='text-titleSm text-[#0866ff]' /> <span className='text-[10px] text-white'>Sign up with Facebook</span>
              </div>
            </div>

            <div className="mt-4 text-center flex gap-2 justify-center">
              <p className="text-white text-titleXXsm">Already have an account?</p>
              <NavLink to="/login">
                <a href="#" className="text-green-300 hover:underline text-titleXXsm">
                  Log-in
                </a>
              </NavLink>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default SignUp;
