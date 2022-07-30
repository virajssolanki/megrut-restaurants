import React from 'react';
import type { NextPage } from 'next'
import InputForm from '../../component/authPart/Input';
import LogButton from '../../component/authPart/loginBtn';
import Link from 'next/link';

const Forgot: NextPage = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                    <h3 className="text-2xl font-bold text-center">Forgot your password?</h3>
                    <form action="">
                        <div className="mt-4">
                            <InputForm dataType='number' placeholder='Your Phone' />
                            <LogButton title='Reset password' />
                            {/* <LogButton title='Back' /> */}
                            <Link href="/admin/auth/login" passHref={true} >
                                <div className="w-full px-6 py-2 mt-4 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                                    Back
                                </div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Forgot;
