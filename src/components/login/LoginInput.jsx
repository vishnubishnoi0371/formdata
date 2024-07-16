"use client";
import { useState } from 'react';
import Inputs from '../common/Inputs';
import { Button } from '../common/Button';
import Link from 'next/link';
import Swal from 'sweetalert2';

const LoginInput = ({ onSwitchToSignUp }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailError) setEmailError('');
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        if (usernameError) setUsernameError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (passwordError) setPasswordError('');
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validateUsername = (username) => {
        return username.length >= 3;
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
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



        if (!validatePassword(password)) {
            setPasswordError('Required password');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            Swal.fire({
                title: 'Success!',
                text: 'Login successful',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                setEmail('');
                setPassword('');
            });
        }
    };

    return (
        <div className='bg-black min-h-screen flex items-center justify-center'>
            <div className='max-w-[376px] mx-auto border rounded-xl p-7 w-full'>
                <h1 className='text-5xl text-center text-white font-medium'>Login ID</h1>

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


                <div className='pt-[21px]'>
                    <Inputs
                        placeholder='Password'
                        type={showPassword ? 'text' : 'password'}
                        inputuse="Password"
                        eyeclasses=''
                        value={password}
                        onChange={handlePasswordChange}
                        togglePasswordVisibility={() => setShowPassword(!showPassword)}
                        showPassword={showPassword}
                    />
                    {passwordError && <p className='text-red-500 text-xs'>{passwordError}</p>}
                </div>

                <Link href="/password" className='font-normal text-xs text-white leading-121 text-malachite tracking-tighter mt-2 relative after:w-full after:absolute after:h-[1px] after:left-0 after:bottom-[-.5px] after:bg-malachite hover:after:w-0 hover:after:left-[50%] after:duration-300 after:ease-in-out'>Forgot Password?</Link>
                <Button
                    text="Login"
                    className="mt-4"
                    onClick={handleSubmit}
                />

                <p className='font-normal text-xs text-white tracking-tighter text-center mt-6'>
                    Don’t have an account?
                    <Link href='/' className='text-blue-500'> SignUp</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginInput;
