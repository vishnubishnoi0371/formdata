"use client"
export const Button = ({ text, className, icon = "", ...props }) => {
    return (
        <div className="pt-8">
            <button
                className={`duration-500 flex rounded-[36px] font-semibold max-w-[180px] mx-auto py-4 px-6  w-full  justify-center  bg-white text-black leading-121  text-sm text-center ${className}`}
                {...props}
            >
                {text}{icon}
            </button></div>
    );
};
