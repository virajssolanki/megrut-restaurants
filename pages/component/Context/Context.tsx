import React, { createContext, ReactNode, useContext, useState } from "react";

type authContextType = {
    user: boolean;
    login: () => void;
    logout: () => void;
};

const authContextDefaultValues: authContextType = {
    user: true  || null,
    login: () => {},
    logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}



type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<boolean>(true);

    const login = () => {
        setUser(true);
    };

    const logout = () => {
        setUser(false);
    };

    const value = {
        user,
        login,
        logout,
    };
    return (
        <>
            <AuthContext.Provider value={ value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}