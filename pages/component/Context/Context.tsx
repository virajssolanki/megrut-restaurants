import React, { createContext, ReactNode, useContext, useState } from "react";

type Props = {
    children: ReactNode;
};

export type adminManuProp = {
    id:string;
    itemName: string;
    imgSrc: string;
    prise:number;
}

type authContextType = {
    AdminManu: adminManuProp[];
    deleteHAndal: () => void;
    editHandl: () => void;
    addManuHandal: () => void;
};

const AdminManuList = [
    {
        id: "11",
        itemName: "Khisdi , sabji , rotli, ringna bateta",
        imgSrc: "/imags/1.jpg",
        prise: 80,
    },
    {
        id:"12",
        itemName: "manu 2 Khisdi , sabji , rotli, ringna bateta",
        imgSrc: "/imags/2.jpeg",
        prise: 80,
    },
]

const adminManudefault:adminManuProp[] = [{
    id:"",
    itemName: "",
    imgSrc: "",
    prise:0,
}]

const authContextDefaultValues: authContextType = {
    AdminManu: adminManudefault ,
    deleteHAndal: () => {},
    editHandl: () => {},
    addManuHandal: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);
export function useAuth() {
    return useContext(AuthContext);
}

export type AdminManuListprops = {
    itemName: string;
    image: string;
    prise: number;
}

export function AuthProvider({ children }: Props) {
    const [AdminManu, setUser] = useState<adminManuProp[]>(AdminManuList);
    const addManuHandal = () => {
        const newManu:adminManuProp = {
            id:"12",
            itemName: "manu 2 Khisdi , sabji , rotli, ringna bateta",
            imgSrc: "/imags/2.jpeg",
            prise: 80,
        }
        setUser( AdminManu );
    }
    const deleteHAndal = () => {
        setUser( AdminManu);
    }
    const editHandl = () => {
        setUser(AdminManu);
    }

    const value = {
        AdminManu,
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