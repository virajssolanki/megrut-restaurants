import Image from "next/image";
import Link from "next/link";
import React from "react";


type topManuProps = {
    itemName: string;
    imgSrc: string;
}
const TopManu: React.FC<topManuProps> = ({ itemName, imgSrc }) => {
    return (
        <>
            <Link href="/" passHref>
                <div className="flex flex-col items-center cursor-pointer">
                    <Image src={imgSrc} alt="megrut restaurant " className="rounded-full self-center" height={200} width={200} />
                    <h1>{itemName}</h1>
                </div>
            </Link>
        </>
    )
}

export default TopManu;