import React from 'react';
import useLoader from '../../shared/loader/Loader';
import FinalLoader from '../../shared/loader/FinalLoader';
import shoe from "../../assets/backgrounds/shoe3.jpeg";

const Login = () => {
    const { loading, online } = useLoader();

    if (loading || !online) {
        return <FinalLoader />;
    }

    return (
        <div
            className="h-screen w-screen" // Ensures the div spans the entire viewport
            style={{
                backgroundImage: `url(${shoe})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
    );
};

export default Login;
