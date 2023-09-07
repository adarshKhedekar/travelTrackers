import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    return <Context.Provider value={{
        user,
        setUser,
        userId,
        setUserId
    }}>
    {children}
    </Context.Provider>
}

export default AppContext;