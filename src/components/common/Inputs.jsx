"use client"
import { EyeClose, EyeOpen } from './Icon';

const Inputs = ({ type, placeholder, inputuse, eyeclasses, value, onChange, togglePasswordVisibility, showPassword }) => {
    return (
        <div className='flex flex-col gap-2'>
            <p className='font-medium text-base text-white '>{inputuse}</p>
            <div className='w-full relative max-h-[48px] rounded-[36px]  flex items-center justify-between'>
                <input
                    type={type}
                    placeholder={placeholder}
                    className='placeholder:font-normal w-full border rounded-lg group relative p-2 outline-none bg-transparent placeholder:text-sm  placeholder:text-white text-white font-normal leading-121 text-sm placeholder:opacity-40'
                    value={value}
                    onChange={onChange}
                />
                {inputuse === 'Password' && (
                    <span className={`${eyeclasses} ml-3 cursor-pointer right-4 absolute`} onClick={togglePasswordVisibility}>
                        {showPassword ? <EyeOpen /> : <EyeClose />}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Inputs;
