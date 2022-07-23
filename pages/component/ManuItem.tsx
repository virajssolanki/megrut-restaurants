import Image from "next/image";
import React from "react";


export type manuProps = {
    itemName: string;
    imgSrc: string;
}

const ManuItem: React.FC<manuProps> = ({ itemName, imgSrc }) => {
    return (
        <>
            <div className="flex justify-center hover:shadow-lg hover:shadow-gray-400 border border-white hover:border hover:border-gray-400 max-w-[344px] p-3 rounded-xl transition-all duration-300 bg-white">
                <div className="rounded-lg bg-white">
                    <Image src={imgSrc} alt="megrut restaurant" className="cursor-pointer rounded-xl" height={260} width={320} />
                    <div className="p-3">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{ itemName }</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Some quick example text to build on...
                        </p>
                        <div className="flex justify-between items-center">
                            <p>
                                $ 200
                            </p>
                            <div>
                                <button type="button" className="mr-3 inline-block px-6 py-2.5 bg-sky-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md border hover:text-sky-900 hover:bg-white hover:border border-sky-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-300 ease-in-out">Map</button>
                                <button type="button" className=" inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg bg-sky-900 border hover:text-sky-900 hover:bg-white hover:border border-sky-900 focus:bg-sky-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-900 active:shadow-lg transition duration-300 ease-in-out">Call</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManuItem;