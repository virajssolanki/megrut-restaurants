import React from 'react';
import type { NextPage } from 'next';
import Heads from '../../component/Heads';
import Link from 'next/link';
import InputForm from '../../component/authPart/Input';
import LogButton from '../../component/authPart/loginBtn';

const Signup: NextPage = () => {
    return (
        <div>
            <Heads title='Megrut Restaurant' />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                    <h3 className="text-2xl font-bold text-center">Join us</h3>
                    <form action="">
                        <div className="mt-4">
                            <InputForm dataType='text' placeholder='Your Name' />
                            <InputForm dataType='number' placeholder='Your Phone' />
                            <InputForm dataType='password' placeholder='Password' />
                            <InputForm dataType='password' placeholder='Confirm Password' />
                            <LogButton title='Create Account' />
                            <div className="mt-6 text-grey-dark">
                                Already have an account?
                                <Link href="/admin/auth/forgot" passHref >
                                    <span className="text-blue-600 hover:underline cursor-pointer ml-1">
                                        Log in
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Signup;
