import React, { useEffect, useState } from 'react';
import { adminManuProp, useAuth } from './Context/ManuContext';
const manuDefaultValue: adminManuProp = {
    id: "",
    itemName: "",
    imgSrc: "",
    prise: "",
}
const ManuForm: React.FC = ({  }) => {
    const { AdminManu, setAdminManu} = useAuth();
    const [todayManu, setTodayManu] = useState<adminManuProp>(manuDefaultValue)
    const onChangeManu = (e :any) => {
        setTodayManu({
            ...todayManu, itemName : e.target.value
        })
    }
    const onChangePrise = (e:any) => {
        setTodayManu({
            ...todayManu, prise : e.target.value
        })
    }
    
    const submitFormHandal = () => {
        setAdminManu( AdminManu.concat(todayManu) )  
        todayManu.itemName = "";

    }
    useEffect(() => {
        AdminManu
    }, [AdminManu]);
    return (
        <div>
            <h1 className="text-center mt-6 text-2xl font-bold">
                Updeta Today Manu
            </h1>
            <div className="flex justify-center">
                <form className='mx-auto'>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 mt-6">
                        Today Manu
                    </label>
                    <textarea id="manu" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Today manu..." value={todayManu.itemName} onChange={onChangeManu}></textarea>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-6" >
                            Manu Prise
                        </label>
                        <input type="number" id="prise" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" onChange={onChangePrise} value={ todayManu.prise } placeholder="100"/>
                    </div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="user_avatar">
                        Upload file
                    </label>
                    <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                    <button type="button" className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={ submitFormHandal }>
                        Active Today Manu
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ManuForm;