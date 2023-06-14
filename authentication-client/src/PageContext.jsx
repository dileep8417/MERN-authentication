import { createContext, useContext, useState } from "react";

const Context = createContext();

export const usePageContext = () => {
    return useContext(Context);
}

const PageContext = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const contextData = {
        isAuthenticated,
        setIsAuthenticated
    };

    return (
        <Context.Provider value={contextData}>
            <div className='page-content'>
                {children}
            </div>
        </Context.Provider>
    );
}

export default PageContext;