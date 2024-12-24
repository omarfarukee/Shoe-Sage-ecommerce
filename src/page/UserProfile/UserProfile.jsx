// eslint-disable-next-line no-unused-vars
import React from 'react'
import useLoader from '../../shared/loader/Loader';
import FinalLoader from '../../shared/loader/FinalLoader';
import { IoIosLogOut } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import shoe from "../../assets/backgrounds/shoe3.jpeg";
import { FaUserAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Footer from '../../shared/Footer/Footer';
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

    const user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user);


    if (loading || !online) {
        return <FinalLoader />;
    }
    return (
        <div className='overflow-hidden'>
            {/* Background Section */}
            <div
                className="overflow-hidden h-[65vh] w-screen flex justify-center items-center"
                style={{
                    backgroundImage: `url(${shoe})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute h-[65vh] inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 formal-collection-text text-titleXl  lg:text-[12em] text-red">
                    <h1>My Profile</h1>
                </div>
            </div>
            <div className=' bg-[#f6f6f6] h-[100vh] flex justify-center'>

                <div   className='w-[90vw] h-[500px] bg-white rounded-xl flex mt-5'>
                    <div className='border-r-2 hidden lg:block w-[300px] mt-5 h-[400px]'>
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
                    <div className='w-full p-10'>
                        <img src="https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltb5d92757ac1ee045/blt864986663773d3e0/665435935939380b65262cb8/AI-creates-what-the-average-person.png%3Fcrop%3D590%2C590%2Cx0%2Cy0" className='rounded-full w-24 h-24' alt="" />
                        <div className='mt-10 pl-5'>
                            <h1 className=' p-5 rounded-md bg-gray-100 flex items-center gap-3'><FaUserAlt className='text-red'/> {user?.name}</h1>
                            <h1 className=' p-5 rounded-md bg-gray-100 flex items-center gap-3 mt-2'><SiGmail className='text-red' />
                            : {user?.email}</h1>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}
