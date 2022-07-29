import Image from "next/image";
import React from "react";
import { Button } from "react-daisyui";


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
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{itemName}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            { }
                        </p>
                        <div className="flex justify-between items-center">
                            <p>
                                $ 200
                            </p>
                            <div>
                                <button className="btn btn-primary mr-3">Map</button>
                                <button className="btn btn-primary">Call</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManuItem;