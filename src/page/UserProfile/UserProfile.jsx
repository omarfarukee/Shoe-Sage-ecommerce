// eslint-disable-next-line no-unused-vars
import React from 'react'
import useLoader from '../../shared/loader/Loader';
import FinalLoader from '../../shared/loader/FinalLoader';
import { IoIosLogOut } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function UserProfile() {
    const { loading, online } = useLoader();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user data from sessionStorage
        sessionStorage.removeItem('user');
        toast.success('Logged out successfully.')
        console.log('User logged out successfully.')

        // Redirect to login page
        navigate('/login');
    };
    if (loading || !online) {
        return <FinalLoader />;
    }
    return (
        <div className='pt-28 bg-[#f6f6f6] h-[100vh] flex justify-center'>
            <div className='w-[90vw] h-[500px] bg-white rounded-xl flex'>
                <div className='border-r-2  w-[300px] mt-5 h-[400px]'>
                    <div className='px-5'>
                        <div className='uppercase text-titleSm border flex justify-center rounded-3xl bg-red text-white'>
                            My profile
                        </div>
                        <div className='ml-5'>
                            <button className="group text-sm uppercase transition-all duration-300 mt-4">
                                Wishlist
                                <div className="w-3 h-[2px] bg-red group-hover:w-14 transition-all duration-300"></div>
                            </button> <br />
                            <button className="group text-sm uppercase transition-all duration-300 mt-4">
                                Cart
                                <div className="w-3 h-[2px] bg-red group-hover:w-8 transition-all duration-300"></div>
                            </button> <br />
                            <button className="group text-sm uppercase transition-all duration-300 mt-4">
                                Collection
                                <div className="w-8 h-[2px] bg-red group-hover:w-20 transition-all duration-300"></div>
                            </button>
                        </div>
                        <button onClick={handleLogout} className="flex w-60 p-2 mt-[250px] justify-center items-center gap-2 bg-rose-100 rounded-md">
                            Log-out <IoIosLogOut />

                        </button>
                    </div>

                </div>
                <div className='w-full'>
                        hello
                </div>
            </div>
        </div>
    )
}
