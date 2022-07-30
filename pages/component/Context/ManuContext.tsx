import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Props = {
    children: ReactNode;
};

export type adminManuProp = {
    id: string;
    itemName: string;
    imgSrc: string;
    prise: string;
}

type authContextType = {
    AdminManu: adminManuProp[];
    deleteHAndal: (id :string) => void;
    editHandl: () => void;
    addManuHandal: () => void;
    setAdminManu?: React.Dispatch<React.SetStateAction<adminManuProp[]>> | any;
};

const AdminManuList:adminManuProp[] = [
    {
        id: "11",
        itemName: "Khisdi , sabji , rotli, ringna bateta",
        imgSrc: "/imags/1.jpg",
        prise: "80",
    },
    {
        id: "12",
        itemName: "manu 2 Khisdi , sabji , rotli, ringna bateta",
        imgSrc: "/imags/2.jpeg",
        prise: "80",
    },
]

export const adminManudefault: adminManuProp[] = [
    {
        id: "15",
        itemName: "",
        imgSrc: "/",
        prise: "",
    }
]

const authContextDefaultValues: authContextType = {
    AdminManu: adminManudefault,
    deleteHAndal: () => { },
    editHandl: () => { },
    addManuHandal: () => { },
    setAdminManu: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: Props) {
    const [AdminManu, setAdminManu] = useState<adminManuProp[]>(adminManudefault); // AdminManuList
    useEffect(() => {
        AdminManu
    }, []);
    const addManuHandal = () => {

    }
    const deleteHAndal = (id:string) => {
        console.log(id)
        const newAminMAnu = AdminManu.filter((AdminManu) => {
            return(
                AdminManu.id !== id
            )
        })
        setAdminManu(newAminMAnu)
    }
    const editHandl = () => {
        setAdminManu(AdminManu);
    }

    const value = {
        AdminManu,
        setAdminManu,
        addManuHandal,
        deleteHAndal,
        editHandl,
    };
    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}