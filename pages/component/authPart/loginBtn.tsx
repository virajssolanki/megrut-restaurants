import React from 'react';

type logButtonProps = {
    title: string;
    onClick?: (e:any) => void;
}
const LogButton:React.FC<logButtonProps> = ( { title, onClick }) => {
    return (
        <div className="flex">
            <button onClick={ onClick } className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                { title }
            </button>
        </div>
    )
}

export default LogButton;