import React from "react";

type inputProps = {
    dataType: string;
    placeholder: string;
    onChange?:  (e:any) => void;
}
const InputForm: React.FC<inputProps> = ({ dataType, placeholder, onChange }) => {
    return (
        <div className="mb-6">
            <input
                type={dataType}
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder={placeholder}
                onChange={ onChange }
            />
        </div>
    )
};

export default InputForm;