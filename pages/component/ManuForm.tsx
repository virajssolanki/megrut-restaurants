import React from 'react';
import InputForm from './authPart/Input';

type manuFormProps = {

}
type fomrItemProps = {
    labale: string;
}
const ManuForm: React.FC<manuFormProps> = ({ }) => {
    const FormItem: React.FC<fomrItemProps> = ({ labale }) => {
        return (
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-6">
                    {labale}
                </label>
                <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            </div>
        )
    }
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
                    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Today manu..."></textarea>
                    <FormItem labale="Manu Prise" />
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="user_avatar">
                        Upload file
                    </label>
                    <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                    <button type="submit" className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Register new account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ManuForm;