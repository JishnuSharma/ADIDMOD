import React, { createContext, useContext, useEffect, useState } from "react";
import { userMe } from "../api/user.api";

interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    loading: boolean;
}

const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
    loading: true,
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await userMe();
                setUser(res.user);
            } catch (err) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
};
