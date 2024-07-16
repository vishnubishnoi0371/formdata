"use client";
import { useState } from 'react';
import Inputs from '../common/Inputs';
import { Button } from '../common/Button';
import Swal from 'sweetalert2';
import Link from 'next/link';

const PasswordForget = ({ onSwitchToSignUp }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailError) setEmailError('');
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!validateEmail(email)) {
            setEmailError('Required email address');
            valid = false;
        } else {
            setEmailError('');
        }



        if (valid) {
            Swal.fire({
                title: 'Mail sent  successfully',
                text: 'Recover Your Password',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                setEmail('');
            });
        }
    };

    return (
        <div className='bg-black min-h-screen flex items-center justify-center'>
            <div className='max-w-[376px] mx-auto border rounded-xl p-7 w-full'>
                <h1 className='text-3xl text-center text-white font-bold'>Forget Password</h1>

                <div className='pt-[21px]'>
                    <Inputs
                        placeholder='Enter your email'
                        type='email'
                        inputuse="Email"
                        eyeclasses='hidden'
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                {emailError && <p className='text-red-500 text-xs'>{emailError}</p>}

                <Button
                    text="Recover Password"
                    className="mt-4"
                    onClick={handleSubmit}
                />
                <Link href="/loginuser" className='text-white flex justify-center mt-4'>Back</Link>
            </div>
        </div>
    );
}

export default PasswordForget;
