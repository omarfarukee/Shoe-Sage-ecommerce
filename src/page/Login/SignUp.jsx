/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import useLoader from '../../shared/loader/Loader';
import FinalLoader from '../../shared/loader/FinalLoader';
import shoe from '../../assets/backgrounds/shoe4.jpg';
import { FaEye, FaEyeSlash, FaLock, FaPhone, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

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
      <form
        onSubmit={handleSubmit}
        className="mt-20 animate__animated animate__backInUp bg-transparent backdrop-blur-md border p-6 rounded-lg shadow-2xl w-[400px] border-[#180c003b] z-10 relative"
      >
        <div className="flex justify-center text-white">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        </div>

        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Name
          </label>
          <div className="flex items-center border border-white rounded-md p-2">
            <FaUser className="text-white mr-2" />
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
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-white">
            Email
          </label>
          <div className="flex items-center border border-white rounded-md p-2">
            <FaUser className="text-white mr-2" />
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
        <div className="mb-4">
          <label htmlFor="number" className="block text-sm font-medium text-white">
            Phone Number
          </label>
          <div className="flex items-center border border-white rounded-md p-2">
            <FaPhone className="text-white mr-2" />
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
            <FaLock className="text-white mr-2" />
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

        <div className="mt-4 text-center">
          <p className="text-white">Already have an account?</p>
          <NavLink to="/login" className="text-white hover:underline">
            Login
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
