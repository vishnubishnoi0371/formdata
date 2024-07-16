"use client";
import React, { useState } from 'react';
import Inputs from '../common/Inputs';
import { Button } from '../common/Button';
import Link from 'next/link';
import Swal from 'sweetalert2';

const SignUp = ({ onSwitchToSignUp }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (confirmPasswordError) setConfirmPasswordError('');
    };

    const handlePhoneNumberChange = (e) => {
        const input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        if (input.length <= 10) {
            setPhoneNumber(input);
        }
        if (phoneNumberError) setPhoneNumberError('');
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

    const validatePhoneNumber = (phoneNumber) => {
        const re = /^\d{10}$/;
        return re.test(phoneNumber);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        console.log('Email:', email);
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        console.log('Phone Number:', phoneNumber);

        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!validateUsername(username)) {
            setUsernameError('Invalid username');
            valid = false;
        } else {
            setUsernameError('');
        }

        if (!validatePassword(password)) {
            setPasswordError('Invalid Password');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (confirmPassword === '') {
            setConfirmPasswordError('Invalid Confirm password');
            valid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            valid = false;
        } else {
            setConfirmPasswordError('');
        }

        if (!validatePhoneNumber(phoneNumber)) {
            setPhoneNumberError('Invalid phone number');
            valid = false;
        } else {
            setPhoneNumberError('');
        }

        if (valid) {
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully signed up!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            setEmail('');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            setPhoneNumber('');
        }
    };

    return (
        <div className='bg-black min-h-screen flex items-center justify-center'>
            <div className='max-w-[376px] mx-auto border p-7 w-full'>
                <h1 className='text-5xl text-center text-white font-bold'>Form</h1>
                <div className='flex gap-3 items-center'>
                    <div className='pt-[21px]'>
                        <Inputs
                            placeholder='Username'
                            type='text'
                            inputuse="Username"
                            eyeclasses='hidden'
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        {usernameError && <p className='text-red-500 text-xs'>{usernameError}</p>}
                    </div>

                    <div className='pt-[21px]'>
                        <Inputs
                            placeholder='Phone number'
                            type='text'
                            inputuse="Phone Number"
                            maxLength={10}
                            eyeclasses='hidden'
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                        />
                        {phoneNumberError && <p className='text-red-500 text-xs'>{phoneNumberError}</p>}
                    </div>
                </div>
                <div className='pt-[21px]'>
                    <Inputs
                        placeholder='Email address'
                        type='email'
                        inputuse="Email address"
                        eyeclasses='hidden'
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {emailError && <p className='text-red-500 text-xs'>{emailError}</p>}
                </div>
                <div className='flex gap-3 items-center'>
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

                    <div className='pt-[21px]'>
                        <Inputs
                            placeholder='Confirm Password'
                            type={showConfirmPassword ? 'text' : 'password'}
                            inputuse="Confirm Password"
                            eyeclasses=''
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            togglePasswordVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
                            showPassword={showConfirmPassword}
                        />
                        {confirmPasswordError && <p className='text-red-500 text-xs'>{confirmPasswordError}</p>}
                    </div>
                </div>
                <a href="#" className='font-normal text-xs text-white  tracking-tighter mt-2 after:w-full after:absolute relative after:h-[1px] after:left-0 after:bottom-[-.5px] after:bg-malachite hover:after:w-0 hover:after:left-[50%] after:duration-300 after:ease-in-out'>Forgot Password?</a>
                <Button
                    text="Sign Up"
                    className=""
                    onClick={handleSubmit}
                />
                <p className='font-normal text-xs tracking-tighter text-white pb-1 text-center mt-6'>Already have an account? <Link href='/loginuser' className='text-blue-500'>Login</Link></p>
            </div>
        </div>
    );
}

export default SignUp;
