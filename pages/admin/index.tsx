import React, { useEffect, useState } from "react";
import AdminNav from "../component/authPart/AdminNav";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Heads from "../component/Heads";
import Login from "./auth/login";

type auth = {
    admin: number;
    password: string;
}
const defaultAuth: auth = {
    admin: 0,
    password: "",
}
type formInputProps = {
    title: string;
    placeholder: string;
    type: string;
    onChange?: () => void;
}
const Home = () => {
    const [coockis, setCoockis] = useState(Boolean);
    const [items, setItems] = useState(defaultAuth);

    const testFunction = (x: any) => {
        // localStorage.setItem('admin', JSON.stringify(x.phone));
        // localStorage.setItem('password', JSON.stringify(x.passw));
        if (x.phone == 7622939283 && x.passw == "1234") {
            setCoockis(true)
        }
    }

    const FormInput: React.FC<formInputProps> = ({ title, placeholder, type, onChange }) => {
        return (
            <div className="mb-5">
                <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    { title }
                </label>
                <input
                onChange={ onChange }
                    type={ type }
                    placeholder={ placeholder }
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
        )
    }
    const reanderAdmin = () => {
        if (coockis !== true) {
            return (
                <>
                    <Heads title='Megrut Restaurant' />
                    <Header />
                    <div className="flex items-center justify-center py-8 px-4 md:p-12 col-span-9">
                        <div className="mx-auto w-full max-w-[550px]">
                            <form action="https://formbold.com/s/FORM_ID" method="POST">
                                <FormInput title="Restaurant Name" type="text" placeholder="Restaurant Name" />
                                <FormInput title="Google map Link" type="text" placeholder="Google map Link" />
                                <FormInput title="Address" type="text" placeholder="Address" />
                                <FormInput title="City" type="text" placeholder="Enter your City" />
                                <FormInput title="Pincode" type="number" placeholder="Enter your Pincode" />
                                <div>
                                    <button
                                        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </>
            )
        }
        else {
            return (
                <>
                    <Login loginData={testFunction} />
                </>
            )
        }
        return (<> </>)
    }
    return (
        <>
            {reanderAdmin()}
        </>
    )
}

export default Home;