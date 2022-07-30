import Image from "next/image";
import React from "react";


export type adminManuProps = {
    itemName: string;
    imgSrc: string;
    prise: string;
    deleteHAndals?: () => void;
    editHandl?: () => void;
}

const AdminManuItem: React.FC<adminManuProps> = ({ itemName, prise, deleteHAndals, editHandl }) => {
    return (
        <>
            <div className="flex mt-4 justify-center hover:shadow-lg hover:shadow-gray-400 border border-white hover:border hover:border-gray-400 max-w-[344px] p-3 rounded-xl transition-all duration-300 bg-white">
                <div className="rounded-lg bg-white">
                    <Image src="/imags/2.jpeg" alt="megrut restaurant" className="cursor-pointer rounded-xl" height={260} width={320} />
                    <div className="p-3">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Restaurant Name</h5>
                        <p className="text-gray-700 text-base mb-4">
                            { itemName }
                        </p>
                        <div className="flex justify-between items-center">
                            <p>
                                <b>{ prise }</b>
                            </p>
                            <div>
                                <button onClick={ editHandl } className="btn btn-primary mr-3">Edit</button>
                                <button onClick={ deleteHAndals } className="btn btn-primary">Delete</button>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminManuItem;