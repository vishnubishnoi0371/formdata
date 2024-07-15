"use client"
export const Button = ({ text, className, icon = "", ...props }) => {
    return (
        <button
            className={`duration-300 flex rounded-[36px] font-semibold max-w-[180px] mx-auto py-4 px-6  w-full  justify-center mt-[21px] max-h-[48px] hover:border-white bg-white text-black leading-121  text-sm text-center ${className}`}
            {...props}
        >
            {text}{icon}
        </button>
    );
};
