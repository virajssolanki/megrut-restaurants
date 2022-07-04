import React, { useState } from 'react';
import Heads from '../../component/Heads';
import InputForm from '../../component/authPart/Input';
import Link from 'next/link';
import LogButton from '../../component/authPart/loginBtn';

interface loginProp {
    loginData: (x: any) => void;
}
type formProp = {
    phone: string;
    passw: string;
}
const defaultForm: formProp = {
    phone: "",
    passw: "",
}
const Login: React.FC<loginProp> = ({ loginData, }) => {
    const [userForm, setUserForm] = useState(defaultForm)
    const onChangePhone = (e: any) => {
        setUserForm({ ...userForm, phone: e.target.value })
    }
    const onChangePassw = (e: any) => {
        setUserForm({ ...userForm, passw: e.target.value })
    }
    const submitHandel = (e: any) => {
        e.preventDefault();
        // console.log( userForm, "from log in page" )
        loginData(userForm)
    }
    return (
        <>
            <Heads title='Megrut Restaurant' />
            <section className="">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone image"
                            />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20 flex justify-center">
                            <form className='max-w-sm'>
                                <h1 className='text-center text-2xl mb-8'>Sign In</h1>
                                <InputForm dataType='text' placeholder='Mobile or Email address' onChange={onChangePhone} />
                                <InputForm dataType='password' placeholder='Password' onChange={onChangePassw} />
                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check"></div>
                                    <Link href="/admin/auth/forgot" passHref >
                                        <span className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out cursor-pointer">
                                            Forgot password?
                                        </span>
                                    </Link>
                                </div>
                                <LogButton title='Log in' onClick={submitHandel} />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;