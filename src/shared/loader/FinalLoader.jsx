import { GiRunningShoe } from "react-icons/gi";

const FinalLoader = () => {

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white backdrop-blur-sm">
            <div className=" flex flex-col items-center text-red">
                <GiRunningShoe className="text-9xl floats-animation mr-4 " />

                <p className="  md:top-[-80px]   text-4xl">
                    Loading
                    <span className="loading-dots">
                        <span className="dot-1">.</span>
                        <span className="dot-2">.</span>
                        <span className="dot-3">.</span>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default FinalLoader;